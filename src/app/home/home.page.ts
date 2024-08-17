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

  // começar por aqui quando fazer um projeto

  segments: string = 'usuarios';
  
  usuarios = [
    {
      nome: 'Selena Gomes',
      idade: '21',
      genero: 'masculino',
      rotinas: [
        {
          dia: 'segunda-feira',
          treinos: [
            "Rosca Direta",
            "Crucifixo",
            'Remada Sumô',
// array de string
          ]
        },

        {
          dia: 'Quarta-feira',
          treinos: [
            "Rosca Invertida",
            "Pulley",
            'Remada Sentada',
// array de string
          ]
        },

        {
          dia: 'sexta-feira',
          treinos: [
            "Supino Inclinado",
            "Bíceps Corta",
            'Bíceps Hulk Invertido',
// array de string
          ]
        },
      ]


    },
    {
      nome: 'Pedro Soares',
      idade: '30',
      genero: 'masculino',
      rotinas: [
        {
          dia: 'Terça-feira',
          treinos: [
            "Prancha Redonda",
            "Jumping Bom dia papai",
            'Flexão de Costas',
// array de string
          ]
        },

        {
          dia: 'Quinta-feira',
          treinos: [
            "Rosca em pé",
            "Rosca scott barra",
            'Bícepis Frances',
// array de string
          ]
        },

        {
          dia: 'Sábado',
          treinos: [
            "Supino Inclinado",
            "agachamento",
            'Pula-corda',
// array de string
          ]
        },
      ]


    }
  ]

  trocar(event: any){
    this.segments = event.detail.value;
    console.log(this.segments)

  }
}
