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
  treinos = [
    {
      nome: 'Pulley',
      series: 3,
      foto: 'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-Pulley-Barra.gif'
    },
    {
      nome: 'Agachamento Sumô',
      series: 3,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/agachamento-sumo-sem-halter.gif'
    },
    {
      nome: 'Supino Reto',
      series: 4,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif'
    },
    {
      nome: 'Remada Unilateral',
      series: 4,
      foto: 'https://static.wixstatic.com/media/2edbed_cf8feb6f79494833b887104bc358843d~mv2.gif'
    },
    {
      nome: 'Levantamento Terra',
      series: 4,
      foto: 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/11/barbell-deadlift.gif'
    },
    {
      nome: 'Flexão de Braços',
      series: 3,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/flexao-de-bracos.gif'
    },
    {
      nome: 'Cadeira Abdutora',
      series: 3,
      foto: ''
    },
    {
      nome: 'Rosca Direta',
      series: 3,
      foto: 'https://static.wixstatic.com/media/2edbed_8a612c33a1f649578ade7454653f7f30~mv2.gif'
    },
    {
      nome: 'Prancha',
      series: 3,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/prancha-com-elevacao-das-pernas-prancha-aranha.gif'
    },
    {
      nome: 'Extensão de Tríceps na Polia',
      series: 3,
      foto: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-no-pulley-atras-ca-cabeca.gif'
    }
  ];
// acima variavel

  constructor() {}
  // tipo de variavel qualquer coisa any
  trocar(event:any){
    
    this.segments = event.detail.value;
  }

  // abaixo funçoes
}
