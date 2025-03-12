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
    localidade: null,
    data_inicio: null,
    biografia: null,
    estatisticas: {
      curtidas: 0,
      seguidores: 0,
      amigos: 0
    },
    postagens:[
      {
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NaRs46tXL_CDdRMWZKg-RAleTur_T0E8xw&s',
        nome: 'Carlos Antônio',
        nome_usuario: '@carlosantonio',
        texto: 'Texto de exemplo de postagem',
        data: '12/03/2025'
      },
      {
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NaRs46tXL_CDdRMWZKg-RAleTur_T0E8xw&s',
        nome: 'Carlos Antônio',
        nome_usuario: '@carlosantonio',
        texto: 'Outro exemplo de texto de postagem',
        data: '13/03/2025'
      },
      {
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NaRs46tXL_CDdRMWZKg-RAleTur_T0E8xw&s',
        nome: 'Carlos Antônio',
        nome_usuario: '@carlosantonio',
        texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, id provident nostrum natus non vitae, doloribus magni animi mollitia, at tempore reprehenderit. Sint pariatur porro fuga modi, nemo quas. Quis.',
        data: '14/03/2025'
      },
      {
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NaRs46tXL_CDdRMWZKg-RAleTur_T0E8xw&s',
        nome: 'Carlos Antônio',
        nome_usuario: '@carlosantonio',
        texto: 'Hello World!!!',
        data: '15/03/2025'
      }
    ]
  };
  
  constructor( ){ }

  
}
