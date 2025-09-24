import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit, OnDestroy {
  usuario: any = null;
  carregando = true;
  editando = false;

  arquivoFoto: File | null = null;
  previewFoto: string | null = null;

  novaPostagem: any = {
    conteudo: '',
    imagem: null,
    previewImagem: null
  };

  private destroy$ = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private storage: Storage,
    private router: Router,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    await this.carregarUsuario();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async carregarUsuario() {
    const token = await this.storage.get('auth_token');
    if (!token) {
      await this.storage.clear();
      this.router.navigate(['/home']);
      return;
    }

    this.carregando = true;

    this.apiService.get('usuario/perfil')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (resp: any) => {
          this.usuario = resp || {};
          if (!this.usuario.postagens) this.usuario.postagens = [];

          // Normaliza URLs das postagens
          this.usuario.postagens = this.usuario.postagens.map((post: any) => ({
            ...post,
            fotoUrl: this.apiService.getFotoUrl(post.picture)
          }));

          // Normaliza URL da foto de perfil
          this.usuario.pictureUrl = this.apiService.getFotoUrl(this.usuario.picture);

          this.carregando = false;
        },
        error: (err) => {
          console.error('Erro ao carregar perfil', err);
          this.carregando = false;
          this.mostrarErro('Erro ao carregar perfil');
        }
      });
  }

  onFileSelected(event: any) {
    const file = event?.target?.files?.[0];
    if (file && file.type && file.type.startsWith('image/')) {
      this.arquivoFoto = file;

      const reader = new FileReader();
      reader.onload = (e: any) => this.previewFoto = e.target.result;
      reader.readAsDataURL(file);
    } else {
      this.mostrarErro('Selecione apenas imagens válidas.');
      this.arquivoFoto = null;
      this.previewFoto = null;
    }
  }

  uploadFoto() {
    if (!this.arquivoFoto) {
      this.mostrarErro('Nenhuma imagem selecionada.');
      return;
    }

    const formData = new FormData();
    formData.append('picture', this.arquivoFoto, this.arquivoFoto.name);

    this.apiService.post('usuario/foto-upload', formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (resp: any) => {
          if (resp?.picture_url) {
            // Atualiza URL com cache busting para forçar atualização no navegador
            this.usuario.pictureUrl = this.apiService.getFotoUrl(resp.picture_url) + '?t=' + new Date().getTime();
            this.usuario.picture = resp.picture_url;
            this.mostrarSucesso('Foto de perfil atualizada!');
          } else {
            // Caso não retorne URL, recarrega perfil
            this.carregarUsuario();
            this.mostrarSucesso('Foto enviada! Atualizando perfil...');
          }

          // Reset preview e arquivo
          this.arquivoFoto = null;
          this.previewFoto = null;
        },
        error: (err) => {
          console.error('Erro no upload:', err);
          if (err.status === 0) {
            this.mostrarErro('Não foi possível conectar ao servidor.');
          } else if (err.status >= 400 && err.status < 500) {
            this.mostrarErro('Erro no envio da imagem. Verifique os dados.');
          } else if (err.status >= 500) {
            this.mostrarErro('Erro no servidor. Tente novamente mais tarde.');
          } else {
            this.mostrarErro('Erro desconhecido ao enviar foto.');
          }
        }
      });
  }

  toggleEdicao() {
    this.editando = !this.editando;
  }

  salvarPerfil() {
    if (!this.usuario?.name || !this.usuario?.email) {
      this.mostrarErro('Nome e e-mail são obrigatórios');
      return;
    }

    this.apiService.post('usuario/editar', this.usuario)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (resp: any) => {
          this.editando = false;
          if (resp?.user) this.usuario = { ...this.usuario, ...resp.user };
          this.mostrarSucesso('Perfil atualizado!');
        },
        error: (err) => {
          console.error('Erro ao salvar perfil', err);
          this.mostrarErro('Erro ao salvar perfil');
        }
      });
  }

  onImagemPostagemSelecionada(event: any) {
    const file = event?.target?.files?.[0];
    if (file && file.type && file.type.startsWith('image/')) {
      this.novaPostagem.imagem = file;
      const reader = new FileReader();
      reader.onload = (e: any) => this.novaPostagem.previewImagem = e.target.result;
      reader.readAsDataURL(file);
    } else {
      this.mostrarErro('Selecione uma imagem válida.');
    }
  }

  criarPostagem() {
    const { conteudo, imagem } = this.novaPostagem;
    if (!conteudo || !conteudo.trim()) {
      this.mostrarErro('Conteúdo é obrigatório.');
      return;
    }

    const formData = new FormData();
    formData.append('description', conteudo.trim());
    if (imagem) formData.append('picture', imagem, imagem.name);

    this.apiService.post('usuario/postagens', formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (resp: any) => {
          const post = {
            ...resp,
            fotoUrl: this.apiService.getFotoUrl(resp.picture)
          };
          if (!this.usuario.postagens) this.usuario.postagens = [];
          this.usuario.postagens.unshift(post);

          this.novaPostagem = { conteudo: '', imagem: null, previewImagem: null };
          this.mostrarSucesso('Postagem publicada!');
        },
        error: (err) => {
          console.error('Erro ao publicar postagem', err);
          this.mostrarErro('Erro ao publicar postagem');
        }
      });
  }

  private async mostrarErro(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
  }

  private async mostrarSucesso(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Sair',
      message: 'Deseja realmente sair?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Sair', handler: () => this.realizarLogout() }
      ]
    });
    await alert.present();
  }

  private realizarLogout() {
    this.apiService.post('usuario/logout', {}).subscribe({
      next: async () => {
        await this.storage.clear();
        this.router.navigate(['/home']);
      },
      error: async () => {
        await this.storage.clear();
        this.router.navigate(['/home']);
      }
    });
  }
}
