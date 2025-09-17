import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  senha: string = '';
  carregando: boolean = false;

  constructor(
    private api: ApiService,
    private router: Router,
    private storage: Storage,
    private alertCtrl: AlertController
  ) {}

  async login() {
    if (!this.email || !this.senha) {
      this.mostrarErro('Preencha email e senha.');
      return;
    }

    this.carregando = true;

    this.api.post('usuario/login', {
      email: this.email,
      password: this.senha,
    }).subscribe({
      next: async (resp) => {
        await this.storage.set('auth_token', resp.token);
        await this.storage.set('user_data', resp.user);
        this.carregando = false;
        this.router.navigate(['/perfil']);
      },
      error: (err) => {
        this.carregando = false;
        console.error(err);
        this.mostrarErro(err.error?.message || 'Login inválido.');
      }
    });
  }

  async mostrarErro(msg: string) {
    const alert = await this.alertCtrl.create({
      header: 'Erro',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
}
