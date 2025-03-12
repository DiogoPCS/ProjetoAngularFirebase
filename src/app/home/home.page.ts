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
   nome: null,
   profissao: null,
   nome_usuario: null,
   idioma: null,
   localidade: null,
   data: null,
   biografia: null,

   estatistiscas: {
    curtida: 0,
    seguidores: 0,
    amigos: 0
   },

   postagens:[
    {
      foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fperfisecross.fandom.com%2Fpt-br%2Fwiki%2FSousuke_Aizen&psig=AOvVaw2LWisL0wkHf57Iu3phMphI&ust=1741885141043000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCJkYmChYwDFQAAAAAdAAAAABAS',
      nome: 'Carlos Antonio',
      nome_usuario: '@carlosantonio',
      texto: 'thg',
      data: '12/03/2025' 
   },

   {
    foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fperfisecross.fandom.com%2Fpt-br%2Fwiki%2FSousuke_Aizen&psig=AOvVaw2LWisL0wkHf57Iu3phMphI&ust=1741885141043000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCJkYmChYwDFQAAAAAdAAAAABAS',
    nome: 'Carlos Antonio',
    nome_usuario: '@carlosantonio',
    texto: 'O',
    data: '13/03/2025' 
 },

 {
  foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fperfisecross.fandom.com%2Fpt-br%2Fwiki%2FSousuke_Aizen&psig=AOvVaw2LWisL0wkHf57Iu3phMphI&ust=1741885141043000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCJkYmChYwDFQAAAAAdAAAAABAS',
  nome: 'Carlos Antonio',
  nome_usuario: '@carlosantonio',
  texto: 'Cara',
  data: '14/03/2025' 
 },

 {
  foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fperfisecross.fandom.com%2Fpt-br%2Fwiki%2FSousuke_Aizen&psig=AOvVaw2LWisL0wkHf57Iu3phMphI&ust=1741885141043000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCJkYmChYwDFQAAAAAdAAAAABAS',
  nome: 'Carlos Antonio',
  nome_usuario: '@carlosantonio',
  texto: 'Perfeito',
  data: '15/03/2025' 
 },
   ]
 };

  constructor(){ }

}
