import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro } from './livro.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  livros: ILivro[] = [
    {
      isbn: '123',
      titulo: 'Um breve história do tempo',
      num_paginas: 0,
      autor: [
        { nome: 'Steve Hawking', email: 's@hotmail.com' },
        { nome: 'Neil Degrasse Tyson', email: 's@hotmail.com' }
      ],
      editora: { nome: 'Erica', site: 'edt@hotmail.com' },
      categoria: [
        { nome: 'científico' },
        { nome: 'educacional' },
      ]
    },
  ];
  
}
