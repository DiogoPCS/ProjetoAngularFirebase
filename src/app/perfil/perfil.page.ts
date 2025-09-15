import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Adicione esta importação

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

  constructor(
    private apiService: ApiService,
    private storage: Storage,
    private router: Router,
    private alertController: AlertController // Adicione esta injeção
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
      // Verificar se é uma imagem
      if (!file.type.startsWith('image/')) {
        this.mostrarErro('Por favor, selecione apenas imagens');
        return;
      }

      // Verificar tamanho do arquivo (ex: máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.mostrarErro('A imagem deve ter no máximo 5MB');
        return;
      }

      this.arquivoFoto = file;
      
      // Criar preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewFoto = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
uploadFoto() {
  if (!this.arquivoFoto) return;

  const formData = new FormData();
  formData.append('picture', this.arquivoFoto);

  this.apiService.post('usuario/foto-upload', formData).subscribe({
    next: (resp) => {
      console.log('Foto atualizada!', resp);
      this.usuario.picture = resp.picture_url;
      this.arquivoFoto = null;
      this.previewFoto = null;
      this.mostrarSucesso('Foto atualizada com sucesso!');
    },
    error: (err) => {
      console.error('Erro detalhado:', err);
      
      // Erro específico do backend
      if (err.status === 500 && err.error?.message) {
        this.mostrarErro('Erro no servidor: ' + err.error.message);
      } else if (err.status === 500) {
        this.mostrarErro('Erro interno no servidor. Contate o administrador.');
      } else {
        this.mostrarErro('Erro ao atualizar foto');
      }
    }
  });
}
  toggleEdicao() {
    this.editando = !this.editando;
  }

  salvarPerfil() {
    // Validação básica
    if (!this.usuario.name || !this.usuario.email) {
      this.mostrarErro('Nome e e-mail são obrigatórios');
      return;
    }

    this.apiService.post('usuario/editar', this.usuario).subscribe({
      next: (resp) => {
        console.log('Perfil atualizado!', resp);
        this.editando = false;
        this.mostrarSucesso('Perfil atualizado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao salvar', err);
        
        // Tratamento específico para erro de e-mail duplicado
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
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Sair',
          handler: () => {
            this.realizarLogout();
          }
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
      error: (err) => {
        console.error('Erro no logout', err);
        // Mesmo com erro, limpa o storage local
        this.storage.remove('auth_token');
        this.storage.remove('user_data');
        this.router.navigate(['/home']);
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
}