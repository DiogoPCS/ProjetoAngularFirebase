import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any = null;
  carregando: boolean = true;
  editando: boolean = false;
  arquivoFoto: File | null = null;
  previewFoto: string | null = null;

  novaPostagem: any = {
    conteudo: '',
    imagem: null,
    previewImagem: null
  };

  constructor(
    private apiService: ApiService,
    private storage: Storage,
    private router: Router,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    await this.carregarUsuario();
  }

  async carregarUsuario() {
    const token = await this.storage.get('auth_token');
    if (!token) {
      this.router.navigate(['/home']);
      return;
    }

    this.apiService.get('usuario/perfil').subscribe({
      next: (resp) => {
        this.usuario = resp;
        if (!this.usuario.postagens) this.usuario.postagens = [];

        // Atualiza cada postagem com URL completa automaticamente
        this.usuario.postagens = this.usuario.postagens.map((post: any) => ({
          ...post,
          fotoUrl: this.getFotoPostagem(post.picture)
        }));

        // Foto de perfil
        this.usuario.pictureUrl = this.getFotoPerfil(this.usuario.picture);

        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar perfil', err);
        this.carregando = false;
        this.mostrarErro('Erro ao carregar perfil');
      }
    });
  }

  // ========== FOTO DE PERFIL ==========
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.arquivoFoto = file;
      const reader = new FileReader();
      reader.onload = (e: any) => this.previewFoto = e.target.result;
      reader.readAsDataURL(file);
    } else this.mostrarErro('Selecione apenas imagens válidas.');
  }

  uploadFoto() {
    if (!this.arquivoFoto) return this.mostrarErro('Nenhuma imagem selecionada.');

    const formData = new FormData();
    formData.append('picture', this.arquivoFoto);

    this.apiService.post('usuario/foto-upload', formData).subscribe({
      next: (resp: any) => {
        this.usuario.picture = resp.picture_url;
        this.usuario.pictureUrl = this.getFotoPerfil(resp.picture_url);
        this.arquivoFoto = null;
        this.previewFoto = null;
        this.mostrarSucesso('Foto de perfil atualizada!');
      },
      error: (err) => {
        console.error(err);
        this.mostrarErro('Erro ao atualizar foto');
      }
    });
  }

  toggleEdicao() { this.editando = !this.editando; }

  salvarPerfil() {
    if (!this.usuario.name || !this.usuario.email) return this.mostrarErro('Nome e e-mail são obrigatórios');

    this.apiService.post('usuario/editar', this.usuario).subscribe({
      next: () => { this.editando = false; this.mostrarSucesso('Perfil atualizado!'); },
      error: (err) => { console.error(err); this.mostrarErro('Erro ao salvar perfil'); }
    });
  }

  // ========== POSTAGENS ==========
  onImagemPostagemSelecionada(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.novaPostagem.imagem = file;
      const reader = new FileReader();
      reader.onload = (e: any) => this.novaPostagem.previewImagem = e.target.result;
      reader.readAsDataURL(file);
    } else this.mostrarErro('Selecione uma imagem válida.');
  }

  criarPostagem() {
    const { conteudo, imagem } = this.novaPostagem;
    if (!conteudo) return this.mostrarErro('Conteúdo é obrigatório.');

    const formData = new FormData();
    formData.append('description', conteudo);
    if (imagem) formData.append('picture', imagem);

    this.apiService.post('usuario/postagens', formData).subscribe({
      next: (resp: any) => {
        resp.fotoUrl = this.getFotoPostagem(resp.picture);
        this.usuario.postagens.unshift(resp);
        this.novaPostagem = { conteudo: '', imagem: null, previewImagem: null };
        this.mostrarSucesso('Postagem publicada!');
      },
      error: (err) => { console.error(err); this.mostrarErro('Erro ao publicar postagem'); }
    });
  }

  // ========== FUNÇÕES AUTOMÁTICAS DE URL ==========
  getFotoPerfil(caminho: string | null): string {
    if (!caminho) return 'assets/default-avatar.png';
    if (caminho.startsWith('http')) return caminho;
    return `http://127.0.0.1:8000/storage/${caminho.replace(/^\/+/, '')}`;
  }

  getFotoPostagem(caminho: string | null): string {
    if (!caminho) return '';
    if (caminho.startsWith('http')) return caminho;

    // Detecta automaticamente se está em "postagens" ou "pictures"
    const base = 'http://127.0.0.1:8000/storage/';
    if (caminho.includes('postagens') || caminho.includes('pictures')) {
      return `${base}${caminho.replace(/^\/+/, '')}`;
    }

    // Caso só tenha o nome do arquivo
    return `${base}postagens/${caminho}`;
  }

  // ========== ALERTAS ==========
  private async mostrarErro(mensagem: string) {
    const alert = await this.alertController.create({ header: 'Erro', message: mensagem, buttons: ['OK'] });
    await alert.present();
  }

  private async mostrarSucesso(mensagem: string) {
    const alert = await this.alertController.create({ header: 'Sucesso', message: mensagem, buttons: ['OK'] });
    await alert.present();
  }

  // ========== LOGOUT ==========
  async logout() {
    await this.alertController.create({
      header: 'Sair',
      message: 'Deseja realmente sair?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Sair', handler: () => this.realizarLogout() }
      ]
    }).then(a => a.present());
  }

  private realizarLogout() {
    this.apiService.post('usuario/logout', {}).subscribe({
      next: async () => { await this.storage.clear(); this.router.navigate(['/home']); },
      error: async () => { await this.storage.clear(); this.router.navigate(['/home']); }
    });
  }
}
