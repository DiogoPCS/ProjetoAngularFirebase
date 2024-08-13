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
  perfil = {
    foto: 'https://i.pinimg.com/736x/bf/a9/ad/bfa9ad8ffb16b4bb194893f6e9b308ed.jpg',
    nome: 'Shrek uwu',
    profissao: '50k Onlyfans',
    user: '@onlyShreka',
    idioma: 'Portugues',
    cidade: 'Rio de Janeiro/RJ',
    desde: 'Outubro 2020',
    bio: 'Das telas dos cinemas direto pros sites mais quentes',
    metricas: {
      curtidas: '1M',
      seguidores: '300K',
      amigos: '800'
    },
    postAmgs: [
      {
        img: 'https://www.google.com/imgres?q=burro%20shrek%20meme&imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faa%2Fe0%2Fca%2Faae0ca92468f44a39a54c1bbe8736a7c.jpg&imgrefurl=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F759208449703878020%2F&docid=0a9wRsKPEEVyIM&tbnid=RAG0S2AUwNpRhM&vet=12ahUKEwiIuubdnOmHAxUgkZUCHSY7F60QM3oECFYQAA..i&w=1242&h=1223&hcb=2&ved=2ahUKEwiIuubdnOmHAxUgkZUCHSY7F60QM3oECFYQAA',
        nome: 'Burro',
        user: '@burroDela',
        post: 'Eu amo minha mulher slk'
      },
      {
        img: 'https://www.google.com/imgres?q=encantado%20shrek%20meme&imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FEaBpA0kWsAEYibA.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Ffernandemiguels%2Fstatus%2F1270130574724861952&docid=3FRTxsQo2TyThM&tbnid=xvpFUjkFow8YoM&vet=12ahUKEwiRjeSVnemHAxVArpUCHeb3FD4QM3oECHkQAA..i&w=400&h=372&hcb=2&ved=2ahUKEwiRjeSVnemHAxVArpUCHeb3FD4QM3oECHkQAA',
        nome: 'Encantado (Taylor`s Version)',
        user: '@encantado',
        post: 'Odeio a Beyonce, Doja Cat, The Weeknd e Rihanna mas n sei dizer o pq'
      },
      {
        img: 'https://www.google.com/imgres?q=shrek%20rumpelstiltskin%20meme&imgurl=https%3A%2F%2Fimgb.ifunny.co%2Fimages%2F25c433468aaab2ff817e8300b6e8347c4c9be1d6719892042cc641a41880277e_3.jpg&imgrefurl=https%3A%2F%2Fbr.ifunny.co%2Fvideo%2FstReIZkT8&docid=NdDjPax3fmwF9M&tbnid=4iOSutkRAm-q5M&vet=12ahUKEwjtu7ulnumHAxUfq5UCHQ19CQoQM3oECHsQAA..i&w=640&h=500&hcb=2&ved=2ahUKEwjtu7ulnumHAxUfq5UCHQ19CQoQM3oECHsQAA',
        nome: 'Rumpelstiltskin',
        user: '@essenomeai',
        post: 'nova plataforma ta pagando muitoooo galera'
      }
    ]
  }

}
