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
  pessoa={
    foto:`https://cdn4.iconfinder.com/data/icons/gaming-70/130/game-31-512.png`,
    nome:`Victor Silva 👩‍💻`,
    objetivo:`Mestre Pokemon`,
    contato: {
      telefone:`333-666-777`,
      email: `VictorSilva@Hotmail.com`,
      github:`github.com/victorMestredosMestre`,
      likendin:`likendin.com/victorMestredosMestre`,
    },

    softskills:[
      'comunicação',
      'Trabalho com Pokemon',
      'Mestre da Liga', 
      'Inovação',
    ],
    formacao_academica:[
    {
      ano_inicio:'2023',
      ano_fim:'2025',
      instituicao:'Etec Sales Gomes',
      curso:'Desenvolvimento de Sistemas',
    },
    {
      ano_inicio:'2040',
      ano_fim:'2047',
      instituicao:'Faculdade da Planta',
      curso:'Meio Ambiente',
    }
    ],
    meus_project:[
      {
        ano:'2047',
        project_inject:'Etec de Portas Abertas',
        desc: 'Nesse Projeto Irei apresentar Meus Pokemons Favaritos com Meu Grupo de Friends, Muito aesthetic, Finalidade: Nenhuma'
      },
      {
        ano:'2047',
        project_inject:'Etec de Portas Abertas',
        desc: 'Nesse Projeto Irei apresentar Meus Pokemons Favaritos com Meu Grupo de Friends, Muito aesthetic, Finalidade: Nenhuma'
      }
    ]
  }
  constructor(){ }
}
