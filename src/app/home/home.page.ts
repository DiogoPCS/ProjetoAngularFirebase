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
  perfil = {
    foto : 'https://avatars.githubusercontent.com/u/162513613?s=400&u=e0a9aa78b8458783075c9078ac379e73d298418d&v=4',
    nome : 'Bruno Mendes de Morais',
    profisao : 'Programador Front-end',
    mensao: '@Bruno',
    lingua : 'Portugues',
    cidade : 'Tatui/SP',
    data: 'desde ontem',
    bio: 'desde ontem criando codigos com auxilio do chat gpt',
    informacao: {
      curtidas: '32.6k',
      seguindo: '1.9k',
      amigos : '2.1k'
    }
    
  }

  amigos = {
    foto : 'https://avatars.githubusercontent.com/u/162513613?s=400&u=e0a9aa78b8458783075c9078ac379e73d298418d&v=4',
    nome : 'euMesmo',
    mensao:'@mesmo',
    comentario:'socorro',
    comentario2:'oq acontece se colocar a chave na tomada',
    comentario1:'achei uma tomada e uma chave'
  }

  }
