import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro } from './acervo.interface';
import { IProduto } from './produto,interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage {
  livros: ILivro[] = [
    {
      isbn: "123",
      titulo: "Uma breve história",
      categoria: [
        { nome: "cientifico" },
        { nome: "aventura" },
        { nome: "terror" }
      ]
    },
    {
      isbn: "124",
      titulo: "O mistério da floresta",
      categoria: [
        { nome: "aventura" },
        { nome: "suspense" }
      ]
    },
    {
      isbn: "125",
      titulo: "Viagem ao espaço",
      categoria: [
        { nome: "cientifico" },
        { nome: "ficção" }
      ]
    },
    {
      isbn: "126",
      titulo: "Sombras da noite",
      categoria: [
        { nome: "terror" }
      ]
    },
    {
      isbn: "127",
      titulo: "O segredo do castelo",
      categoria: [
        { nome: "aventura" },
        { nome: "fantasia" }
      ]
    },
    {
      isbn: "128",
      titulo: "Ciência para todos",
      categoria: [
        { nome: "cientifico" }
      ]
    },
    {
      isbn: "129",
      titulo: "A ilha perdida",
      categoria: [
        { nome: "aventura" }
      ]
    },
    {
      isbn: "130",
      titulo: "Pesadelos reais",
      categoria: [
        { nome: "terror" }
      ]
    },
    {
      isbn: "131",
      titulo: "O enigma do tempo",
      categoria: [
        { nome: "ficção" },
        { nome: "cientifico" }
      ]
    },
    {
      isbn: "132",
      titulo: "Exploradores do futuro",
      categoria: [
        { nome: "aventura" },
        { nome: "ficção" }
      ]
    },
    {
      isbn: "133",
      titulo: "Laboratório secreto",
      categoria: [
        { nome: "cientifico" }
      ]
    },
    {
      isbn: "134",
      titulo: "A casa abandonada",
      categoria: [
        { nome: "terror" }
      ]
    },
    {
      isbn: "135",
      titulo: "Mundos desconhecidos",
      categoria: [
        { nome: "ficção" }
      ]
    },
    {
      isbn: "136",
      titulo: "Aventura no deserto",
      categoria: [
        { nome: "aventura" }
      ]
    },
    {
      isbn: "137",
      titulo: "O código secreto",
      categoria: [
        { nome: "suspense" }
      ]
    },
    {
      isbn: "138",
      titulo: "Histórias do além",
      categoria: [
        { nome: "terror" }
      ]
    },
    {
      isbn: "139",
      titulo: "Descobertas incríveis",
      categoria: [
        { nome: "cientifico" }
      ]
    },
    {
      isbn: "140",
      titulo: "O guardião do portal",
      categoria: [
        { nome: "fantasia" }
      ]
    },
    {
      isbn: "141",
      titulo: "Missão impossível",
      categoria: [
        { nome: "aventura" },
        { nome: "suspense" }
      ]
    },
    {
      isbn: "142",
      titulo: "No limite do medo",
      categoria: [
        { nome: "terror" }
      ]
    },
    {
      isbn: "143",
      titulo: "Universo paralelo",
      categoria: [
        { nome: "ficção" }
      ]
    }
  ];

  produtos: IProduto[] = [
    {
      nome: "Smartphone",
      preco: 1999.99,
      descricao: "Um smartphone de última geração com câmera de alta resolução e bateria de longa duração."
    }
  ];
}

