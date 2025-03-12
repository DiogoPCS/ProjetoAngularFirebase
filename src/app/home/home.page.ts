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
  perfil: any ={
    foto: null,
    nome: null,
    profissao:null,
    nome_usuario:null,
    idioma:null,
    localidade:null,
    data_inicio:null,
    biografia:null,
    estatisticas:{
      curtidas: 0,
      seguindo: 0,
      amigos:0
    },
    postagem:[
      {
        foto:'https://pbs.twimg.com/media/FN7ozAFVUAEgWnf.jpg:large',
        nome:'vinicius',
        nome_usuario:'@vini616',
        texto:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, facere cumque. Molestias quo nobis dicta voluptatem obcaecati, quasi tempora alias, laborum voluptas molestiae qui! Labore illum corporis ipsum veniam quam?',
        data:'12/03/2025'
      },
      {
        foto:'https://preview.redd.it/sister-friede-build-guide-v0-i5qsd41poj2e1.jpg?width=310&format=pjpg&auto=webp&s=c5324ea455ac3d60deb3f73ad2b24ef0eb3f752e',
        nome:'vinicius',
        nome_usuario:'@vini616',
        texto:'irmã frige é impossivel',
        data:'12/03/2025'
      },
      {
        foto:'https://i.ytimg.com/vi/fBnZa0kJFJQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADqHpnh17kXx3bLQ1_cVK9dowMqw',
        nome:'vinicius',
        nome_usuario:'@vini616',
        texto:'radhan é easy',
        data:'12/03/2025'
      },

    ]
  }



};



