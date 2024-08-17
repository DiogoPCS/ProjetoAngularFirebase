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
  segments: string = 'usuario';
  usuarios = [
    {
      nome:'ninguem',
      idade: 20,
      genero:'Masculino',
      rotinas:[
        {
          dia: 'segunda-feira',
          treinos : [
            'Rosca Direta',
            'Crucifixo',
            'Remada Sumô'
          ]
        },
        {
          dia: 'quarta-feira',
          treinos : [
            'Rosca Invertida',
            'Pulley',
            'Remada Sentada'
          ]
        },
        {
          dia: 'Sexta-feira',
          treinos : [
            'Supino Inclinado',
            'Biceps Corda',
            'Biceps Hulk invertido'
          ]
        }
        
      ]
    },
    {
      nome:'todo mundo',
      idade: 93,
      genero:'feminino',
      rotinas:[
        {
          dia: 'terca-feira',
          treinos : [
            'Rosca Direta',
            'Levantamento Terra',
            'Remada Sumô'
          ]
        },
        {
          dia: 'Quinta-feira',
          treinos : [
            'Supino Simples',
            'Agachamento com alters',
            'Flexões de Diamante'
          ]
        },
        {
          dia: 'Sexta-feira',
          treinos : [
            'Supino Inclinado',
            'Biceps Corda',
            'Levações Laterais'
          ]
        }
        
      ]
    },
  ]

  trocar(event: any){
    this.segments = event.detail.value;
  }
}
