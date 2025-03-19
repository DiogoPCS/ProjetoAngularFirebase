import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  export class HomePage {
    perfil: any = {
      foto: null,
      nome: null,
      profissao: null,
      nome_usuario: null,
      idioma: null,
      localidade: null,
      data_inicio: null,
      biografia: null,
      estatisticas: {
      curtidas: 0,
      seguindo: 0,
      amigos: 0
      },
      postagens: [
        {
          foto: 'https://pbs.twimg.com/media/FlpSdtAWAAAapji?format=jpg&name=large',
          nome: 'Hisadora Grangeiro',
          nome_usuario: '_hisadora_',
          texto: 'exemplo1',
          data: '12/03/25 16:10',
        },
        
        {
          foto: 'https://pbs.twimg.com/media/FlpSdtAWAAAapji?format=jpg&name=large',
          nome: 'Hisadora Grangeiro',
          nome_usuario: '_hisadora_',
          texto: 'exemplo2',
          data: '12/03/25 16:12',
        }
      ]
    }

  constructor( 
  ){ }

}
