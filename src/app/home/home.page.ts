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
foto:'https://wallpapers-clan.com/wp-content/uploads/2022/07/kuromi-pfp-3.jpg',
nome:'Alceu Neto',
profissao: 'Programador',
idioma:'Português',
Cidade: 'Tatuí / SP',
tempo: '2023',
biografia : {
  bio:"Programador desde 2023 e Músico Clássico"

},
estatisticas :{
curtidas: '258.4k',
seguindo: '35.9k',
amigos: 25
},
postagens: [{
  fotopost:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pP2g7REZAmmQ3NHBVxBg-agdEW81i_xjmQ&s',
  nomeperfilamigo:'Juvenal',
  conteudo:'esse cara é muito ruim vai se fude'
},
{
fotopost:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pP2g7REZAmmQ3NHBVxBg-agdEW81i_xjmQ&s',
nomeperfilamigo:'Alceu',
conteudo:'pqp alguém deleta a conta desse cara'

},
{
  fotopost:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pP2g7REZAmmQ3NHBVxBg-agdEW81i_xjmQ&s',
  nomeperfilamigo:'Alceu',
  conteudo:'pqp alguém deleta a conta desse cara'
  
  },
  {
    fotopost:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pP2g7REZAmmQ3NHBVxBg-agdEW81i_xjmQ&s',
    nomeperfilamigo:'Alceu',
    conteudo:'pqp alguém deleta a conta desse cara'
    
    },]






}

}
