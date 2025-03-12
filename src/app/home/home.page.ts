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
    profissão: null,
    nome_usuario: null,
    idioma: null,
    localidade: null,
    data_inicio: null,
    biografia: null,
    estatiscas: {
      curtidas: 0,
      seguindo: 0,
      amigos: 0
    },
    postagens: [
      {
        foto: 'https://darksouls-portuguese.wiki.fextralife.com/file/Dark-Souls---Portuguese/fatty_mc_fatso.jpg',
        nome: 'Pikimon Alberto',
        nome_usuario: '@pikimonalberto',
        texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, deleniti ea omnis ab ducimus rem nulla modi aut architecto, non neque dolorum, consectetur exercitationem at accusantium possimus quibusdam. Voluptatibus, vitae.',
        data: '12/03/2025 14:00'
      },
      {
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnx32jbe7ZsiBO-VDnyHrEAABjYYR_15R2ow&s',
        nome: 'Pikimon Alberto',
        nome_usuario: '@pikimonalberto',
        texto: 'otário kkkkkkkkkkkk',
        data: '12/03/2025 14:00'
      },
      {
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAn4P7ANMqVfs4Ldo6WoCwC0V90gbr9rhUjg&s',
        nome: 'Pikimon Alberto',
        nome_usuario: '@pikimonalberto',
        texto: 'otário kkkkkkkkkkkk',
        data: '12/03/2025 14:00'
      }
    ]
  }

  constructor( ){ }

  }
