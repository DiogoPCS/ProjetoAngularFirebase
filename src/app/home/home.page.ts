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
  // variavel genetica
  segments:string = 'usuarios';
  usuarios =[
    // lista de objetos
      {
        nome:'Seleide Silva',
        idade:'20',
        genero:'Masculino',
        // outra array
      rotinas:[
        {
          dia:'Segunda-feira',
          treinos:[
            'Rosca Direta',
            'Crucifixo',
            'Remada Sumo'
          ]
        },

        {
          dia:'Quarta-feira',
          treinos:[
            'Rosca Invertida',
            'pulley',
            'Remada sentada'
          ]
        },

        {
          dia:'Sexta-feira',
          treinos:[
            'Supino Inclinado',
            'Bíceps Corda',
            'Bíceps Hulk Invertido'
          ]
        }
      ]
      
    },

    {
      nome:'Marciano Verdinho',
      idade:'20',
      genero:'Masculino',
      // outra array
    rotinas:[
      {
        dia:'Terça-feira',
        treinos:[
          'Prancha Redonda',
          'Supino',
          'Remada Sumo'
        ]
      },

      {
        dia:'Quinta-feira',
        treinos:[
          'Sumô',
          'pulley',
          'Remada no aparelho'
        ]
      },

      {
        dia:'Sábado',
        treinos:[
          'Bicicleta',
          'Agachamento',
          'Remada Sentada'
        ]
      }
    ]
    
  }
  ]
// acima variavel

  constructor() {}
  // tipo de variavel qualquer coisa any
  trocar(event:any){
    
    this.segments = event.detail.value;
  }

  // abaixo funçoes
}
