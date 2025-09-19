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

  // Postagens
  novaPostagem: any = {
    titulo: '',
    conteudo: '',
    imagem: null,
    previewImagem: null
  };

  constructor(
    private apiService: ApiService,
    private storage: Storage,
    private router: Router,
    private alertController: AlertController
  ) { }

  async ngOnInit() {
    await this.carregarUsuario();
  }

  async carregarUsuario() {
    try {
      const token = await this.storage.get('auth_token');
      if (!token) {
        this.router.navigate(['/home']);
        return;
      }

      this.apiService.get('usuario/perfil').subscribe({
        next: (resp) => {
          this.usuario = resp;
          this.carregando = false;
        },
        error: (err) => {
          console.error('Erro ao carregar perfil', err);
          this.carregando = false;
          this.mostrarErro('Erro ao carregar perfil');
        }
      });
    } catch (error) {
      console.error('Erro:', error);
      this.carregando = false;
      this.mostrarErro('Erro inesperado');
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        this.mostrarErro('Por favor, selecione apenas imagens');
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        this.mostrarErro('A imagem deve ter no máximo 10MB');
        return;
      }

      this.arquivoFoto = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewFoto = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadFoto() {
    if (!this.arquivoFoto) {
      this.mostrarErro('Nenhuma imagem selecionada para upload.');
      return;
    }

    const formData = new FormData();
    formData.append('picture', this.arquivoFoto);

    this.apiService.post('usuario/foto-upload', formData).subscribe({
      next: (resp: any) => {
        const baseUrl = 'http://localhost:8000/';
        this.usuario.picture = resp.picture_url.startsWith('http')
          ? resp.picture_url
          : baseUrl + resp.picture_url.replace(/^\/+/, '');

        this.arquivoFoto = null;
        this.previewFoto = null;
        this.mostrarSucesso('Foto atualizada com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao atualizar foto', err);
        this.mostrarErro('Erro ao atualizar foto');
      }
    });
  }

  toggleEdicao() {
    this.editando = !this.editando;
  }

  salvarPerfil() {
    if (!this.usuario.name || !this.usuario.email) {
      this.mostrarErro('Nome e e-mail são obrigatórios');
      return;
    }

    this.apiService.post('usuario/editar', this.usuario).subscribe({
      next: () => {
        this.editando = false;
        this.mostrarSucesso('Perfil atualizado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao salvar', err);
        if (err.status === 422 && err.error?.errors?.email) {
          this.mostrarErro('Este e-mail já está em uso por outro usuário');
        } else {
          this.mostrarErro('Erro ao salvar perfil');
        }
      }
    });
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Sair',
      message: 'Deseja realmente sair?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Sair',
          handler: () => this.realizarLogout()
        }
      ]
    });

    await alert.present();
  }

  private realizarLogout() {
    this.apiService.post('usuario/logout', {}).subscribe({
      next: async () => {
        await this.storage.remove('auth_token');
        await this.storage.remove('user_data');
        this.router.navigate(['/home']);
      },
      error: async (err) => {
        console.error('Erro no logout', err);
        await this.storage.remove('auth_token');
        await this.storage.remove('user_data');
        this.router.navigate(['/home']);
      }
    });
  }

  // ========== POSTAGENS ==========

  onImagemPostagemSelecionada(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.novaPostagem.imagem = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.novaPostagem.previewImagem = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.mostrarErro('Selecione uma imagem válida.');
    }
  }

  criarPostagem() {
    const { titulo, conteudo, imagem } = this.novaPostagem;

    if (!titulo || !conteudo) {
      this.mostrarErro('Título e conteúdo são obrigatórios.');
      return;
    }

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('conteudo', conteudo);
    if (imagem) {
      formData.append('imagem', imagem);
    }

    this.apiService.post('usuario/postagens', formData).subscribe({
      next: (resp: any) => {
        this.mostrarSucesso('Postagem publicada!');
        this.novaPostagem = { titulo: '', conteudo: '', imagem: null, previewImagem: null };
        this.usuario.postagens = [resp, ...(this.usuario.postagens || [])];
      },
      error: (err) => {
        console.error('Erro ao publicar', err);
        this.mostrarErro('Erro ao publicar postagem');
      }
    });
  }

  // ========== ALERTAS ==========

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
}
