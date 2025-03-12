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
      curtidas: null,
      seguindo: 0,
      amigos: 0,
    },
    postagens: [
      {
      foto: 'https://s.yimg.com/ny/api/res/1.2/SMi8DJHCUiNVKpmIC4ghog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMA--/https://media.zenfs.com/es/qore_584/59c184ae99f82bdf939e562f89b5ca1d',
      nome: 'Carlos Antônio',
      nome_usuario: '@carlão',
      texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore culpa sapiente perferendis illo odit nesciunt ulla ',
      data: '12/02/2024 14:00',
    },
    {
      foto: 'https://s.yimg.com/ny/api/res/1.2/SMi8DJHCUiNVKpmIC4ghog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMA--/https://media.zenfs.com/es/qore_584/59c184ae99f82bdf939e562f89b5ca1d',
      nome: 'Carlos Antônio',
      nome_usuario: '@carlão',
      texto: 'Outro Exemplo ',
      data: '12/02/2024 14:10',
    },
    {
      foto: 'https://s.yimg.com/ny/api/res/1.2/SMi8DJHCUiNVKpmIC4ghog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMA--/https://media.zenfs.com/es/qore_584/59c184ae99f82bdf939e562f89b5ca1d',
      nome: 'Carlos Antônio',
      nome_usuario: '@carlão',
      texto: 'Hello World!',
      data: '12/02/2024 14:30',
    }

  ]
    
  }
constructor(){}
};

