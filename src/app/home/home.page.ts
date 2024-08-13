import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // variaveis
  pessoa = {
    foto : 'https://avatars.githubusercontent.com/u/162513613?s=400&u=e0a9aa78b8458783075c9078ac379e73d298418d&v=4',
    nome : 'Bruno Mendes de Morais',
    objetivo : 'Programador Front-end',
    contato : {
      email: 'mendesdemoraisbruno@gmail.com',
      telefone: '(15)052684899',
      github:'https://github.com/BrunoMendesMorais',
      linkedin:'brunomendesdemorais'
    },
    softskills:[
      'comunicação',
      'proatividade',
      'trabalho em grupo',
      'resiliencia'
    ],
    formacao:[
      {
        anoInicio:'2023',
        anoFim:'2024',
        instituicao:'Etec Sales Gomes',
        curso:'Desenvolvimento de Sistema'
      },
      {
        anoInicio:'2020',
        anoFim:'2024',
        instituicao:'Barão de surui',
        curso:'Ensino médio'
      }
    ]
  }


  }
