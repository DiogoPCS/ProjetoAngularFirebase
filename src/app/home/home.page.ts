import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Livro } from './livros.interface';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  livros: Livro[] = [
    {
      isbn: '123',
      titulo: 'A decadência da psiquiatria ocidental',
      sinopse: 'Denuncia o declínio da psiquiatria moderna...',
      data_lancamento: '01/2021',
      paginas: '210',
      autor: [
        { nome: 'Guido Arturo Palomba', email: 'guidopsi@.com' }
      ],
      categoria: [
        { nome: 'Científico' }
      ],
      editora: { nome: 'Editora Del Rey', email: 'delrey@.com' }
    },

    {
      isbn: '124',
      titulo: 'Dom Casmurro',
      sinopse: 'História de Bentinho e Capitu.',
      data_lancamento: '1899',
      paginas: '256',
      autor: [
        { nome: 'Machado de Assis', email: 'machado@.com' }
      ],
      categoria: [
        { nome: 'Romance' }
      ],
      editora: { nome: 'Editora Globo', email: 'globo@.com' }
    },

    {
      isbn: '125',
      titulo: 'O Pequeno Príncipe',
      sinopse: 'Uma história sobre amizade e valores.',
      data_lancamento: '1943',
      paginas: '96',
      autor: [
        { nome: 'Antoine de Saint-Exupéry', email: 'antoine@.com' }
      ],
      categoria: [
        { nome: 'Fábula' }
      ],
      editora: { nome: 'Agir', email: 'agir@.com' }
    },

    {
      isbn: '126',
      titulo: '1984',
      sinopse: 'Uma distopia sobre vigilância total.',
      data_lancamento: '1949',
      paginas: '328',
      autor: [
        { nome: 'George Orwell', email: 'orwell@.com' }
      ],
      categoria: [
        { nome: 'Distopia' }
      ],
      editora: { nome: 'Companhia das Letras', email: 'cia@.com' }
    },

    {
      isbn: '127',
      titulo: 'A Revolução dos Bichos',
      sinopse: 'Uma crítica política em forma de fábula.',
      data_lancamento: '1945',
      paginas: '152',
      autor: [
        { nome: 'George Orwell', email: 'orwell@.com' }
      ],
      categoria: [
        { nome: 'Satírico' }
      ],
      editora: { nome: 'Companhia das Letras', email: 'cia@.com' }
    },

    {
      isbn: '128',
      titulo: 'Harry Potter e a Pedra Filosofal',
      sinopse: 'A jornada de um jovem bruxo.',
      data_lancamento: '1997',
      paginas: '264',
      autor: [
        { nome: 'J.K. Rowling', email: 'jk@.com' }
      ],
      categoria: [
        { nome: 'Fantasia' }
      ],
      editora: { nome: 'Rocco', email: 'rocco@.com' }
    },

    {
      isbn: '129',
      titulo: 'Senhor dos Anéis',
      sinopse: 'Uma grande aventura na Terra Média.',
      data_lancamento: '1954',
      paginas: '1178',
      autor: [
        { nome: 'J.R.R. Tolkien', email: 'tolkien@.com' }
      ],
      categoria: [
        { nome: 'Fantasia' }
      ],
      editora: { nome: 'Martins Fontes', email: 'mf@.com' }
    },

    {
      isbn: '130',
      titulo: 'O Hobbit',
      sinopse: 'A aventura de Bilbo Bolseiro.',
      data_lancamento: '1937',
      paginas: '310',
      autor: [
        { nome: 'J.R.R. Tolkien', email: 'tolkien@.com' }
      ],
      categoria: [
        { nome: 'Fantasia' }
      ],
      editora: { nome: 'Martins Fontes', email: 'mf@.com' }
    },

    {
      isbn: '131',
      titulo: 'A Culpa é das Estrelas',
      sinopse: 'Uma história de amor e doença.',
      data_lancamento: '2012',
      paginas: '288',
      autor: [
        { nome: 'John Green', email: 'green@.com' }
      ],
      categoria: [
        { nome: 'Romance' }
      ],
      editora: { nome: 'Intrínseca', email: 'intrinseca@.com' }
    },

    {
      isbn: '132',
      titulo: 'It: A Coisa',
      sinopse: 'Um grupo enfrenta um mal sobrenatural.',
      data_lancamento: '1986',
      paginas: '1138',
      autor: [
        { nome: 'Stephen King', email: 'king@.com' }
      ],
      categoria: [
        { nome: 'Terror' }
      ],
      editora: { nome: 'Suma', email: 'suma@.com' }
    },

    {
      isbn: '133',
      titulo: 'O Código Da Vinci',
      sinopse: 'Mistério envolvendo símbolos religiosos.',
      data_lancamento: '2003',
      paginas: '454',
      autor: [
        { nome: 'Dan Brown', email: 'brown@.com' }
      ],
      categoria: [
        { nome: 'Suspense' }
      ],
      editora: { nome: 'Arqueiro', email: 'arqueiro@.com' }
    }
  ];


}
