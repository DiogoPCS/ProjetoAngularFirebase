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
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyZDSyazgi2SYkrOX_KXLu9_zEn6eyNTWyw&s',
        nome: 'Carlos Antônio',
        nome_usuario: '@carlosantonio',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat unde a quod exercitationem saepe obcaecati ullam corrupti quos! Excepturi est nemo mollitia similique maiores voluptatibus tempore provident corporis quia?',
        data: '12/03/2025 14:00'
      },
      {
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyZDSyazgi2SYkrOX_KXLu9_zEn6eyNTWyw&s',
        nome: 'Carlos Antônio',
        nome_usuario: '@carlosantonio',
        texto: 'Outro exemplo de Postagem!!!',
        data: '12/03/2025 14:10'
      },
      {
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyZDSyazgi2SYkrOX_KXLu9_zEn6eyNTWyw&s',
        nome: 'Carlos Antônio',
        nome_usuario: '@carlosantonio',
        texto: 'Hello World!',
        data: '12/03/2025 14:30'
      },
    ]
  }

  constructor( ){ }

}
