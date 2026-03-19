import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Livro } from './livro.interface';
import { isBoolean } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  livros = [
    {
      isbn: '124',
      titulo: 'A Jornada Perdida',
      sinopse: 'Um grupo se perde em uma terra desconhecida',
      paginas: '310',
      data_lancamento: '12/03/2005',
      autor: [{ nome: 'Carlos Silva', email: 'carlos@email.com' }],
      categoria: [{ nome: 'Aventura' }],
      editora: { nome: 'Atlas', site: 'atlas.com' }
    },
    {
      isbn: '125',
      titulo: 'Mistérios do Oceano',
      sinopse: 'Segredos escondidos nas profundezas do mar',
      paginas: '198',
      data_lancamento: '22/07/2010',
      autor: [{ nome: 'Marina Costa', email: 'marina@email.com' }],
      categoria: [{ nome: 'Aventura' }],
      editora: { nome: 'Nautica', site: 'nautica.com' }
    },
    {
      isbn: '126',
      titulo: 'Magia Antiga',
      sinopse: 'Feitiços esquecidos voltam a aparecer',
      paginas: '420',
      data_lancamento: '15/09/2012',
      autor: [{ nome: 'João Mendes', email: 'joao@email.com' }],
      categoria: [{ nome: 'Fantasia' }],
      editora: { nome: 'Lendária', site: 'lendaria.com' }
    },
    {
      isbn: '127',
      titulo: 'Cidade das Sombras',
      sinopse: 'Uma cidade onde nada é o que parece',
      paginas: '280',
      data_lancamento: '01/11/2018',
      autor: [{ nome: 'Ana Souza', email: 'ana@email.com' }],
      categoria: [{ nome: 'Mistério' }],
      editora: { nome: 'DarkBooks', site: 'darkbooks.com' }
    },
    {
      isbn: '128',
      titulo: 'O Último Guerreiro',
      sinopse: 'Um guerreiro luta para salvar seu povo',
      paginas: '350',
      data_lancamento: '20/05/2016',
      autor: [{ nome: 'Pedro Alves', email: 'pedro@email.com' }],
      categoria: [{ nome: 'Ação' }],
      editora: { nome: 'Heroica', site: 'heroica.com' }
    },
    {
      isbn: '129',
      titulo: 'Planeta Vermelho',
      sinopse: 'Exploração em Marte revela perigos inesperados',
      paginas: '260',
      data_lancamento: '10/10/2019',
      autor: [{ nome: 'Lucas Rocha', email: 'lucas@email.com' }],
      categoria: [{ nome: 'Ficção Científica' }],
      editora: { nome: 'Cosmos', site: 'cosmos.com' }
    },
    {
      isbn: '130',
      titulo: 'Segredos da Floresta',
      sinopse: 'Criaturas mágicas habitam uma floresta misteriosa',
      paginas: '300',
      data_lancamento: '08/08/2014',
      autor: [{ nome: 'Fernanda Lima', email: 'fernanda@email.com' }],
      categoria: [{ nome: 'Fantasia' }],
      editora: { nome: 'Natureza', site: 'natureza.com' }
    },
    {
      isbn: '131',
      titulo: 'Código Perdido',
      sinopse: 'Um hacker descobre um segredo global',
      paginas: '275',
      data_lancamento: '17/01/2020',
      autor: [{ nome: 'Rafael Dias', email: 'rafael@email.com' }],
      categoria: [{ nome: 'Tecnologia' }],
      editora: { nome: 'TechPress', site: 'techpress.com' }
    },
    {
      isbn: '132',
      titulo: 'Amor em Paris',
      sinopse: 'Uma história romântica na cidade luz',
      paginas: '190',
      data_lancamento: '14/02/2017',
      autor: [{ nome: 'Clara Nunes', email: 'clara@email.com' }],
      categoria: [{ nome: 'Romance' }],
      editora: { nome: 'Romancear', site: 'romancear.com' }
    },
    {
      isbn: '133',
      titulo: 'A Ilha Proibida',
      sinopse: 'Uma ilha cheia de perigos e mistérios',
      paginas: '330',
      data_lancamento: '09/09/2013',
      autor: [{ nome: 'Bruno Castro', email: 'bruno@email.com' }],
      categoria: [{ nome: 'Aventura' }],
      editora: { nome: 'Explora', site: 'explora.com' }
    },
    {
      isbn: '134',
      titulo: 'Tempo Fragmentado',
      sinopse: 'Viagens no tempo causam paradoxos',
      paginas: '410',
      data_lancamento: '03/03/2021',
      autor: [{ nome: 'Igor Martins', email: 'igor@email.com' }],
      categoria: [{ nome: 'Ficção Científica' }],
      editora: { nome: 'Quantum', site: 'quantum.com' }
    },
    {
      isbn: '135',
      titulo: 'O Reino Esquecido',
      sinopse: 'Um reino perdido reaparece após séculos',
      paginas: '370',
      data_lancamento: '11/11/2015',
      autor: [{ nome: 'Juliana Freitas', email: 'juliana@email.com' }],
      categoria: [{ nome: 'Fantasia' }],
      editora: { nome: 'Reinos', site: 'reinos.com' }
    },
    {
      isbn: '136',
      titulo: 'Noite Sem Fim',
      sinopse: 'Uma cidade mergulha na escuridão eterna',
      paginas: '255',
      data_lancamento: '21/06/2018',
      autor: [{ nome: 'Thiago Barros', email: 'thiago@email.com' }],
      categoria: [{ nome: 'Suspense' }],
      editora: { nome: 'Noir', site: 'noir.com' }
    },
    {
      isbn: '137',
      titulo: 'Além das Estrelas',
      sinopse: 'Uma missão espacial rumo ao desconhecido',
      paginas: '340',
      data_lancamento: '30/12/2022',
      autor: [{ nome: 'Beatriz Ramos', email: 'beatriz@email.com' }],
      categoria: [{ nome: 'Ficção Científica' }],
      editora: { nome: 'Galáxia', site: 'galaxia.com' }
    },
    {
      isbn: '138',
      titulo: 'Labirinto Mental',
      sinopse: 'Um psicólogo enfrenta sua própria mente',
      paginas: '290',
      data_lancamento: '05/05/2011',
      autor: [{ nome: 'Daniel Pires', email: 'daniel@email.com' }],
      categoria: [{ nome: 'Drama' }],
      editora: { nome: 'Mente', site: 'mente.com' }
    },
    {
      isbn: '139',
      titulo: 'Guerra dos Reinos',
      sinopse: 'Reinos entram em conflito por poder',
      paginas: '500',
      data_lancamento: '19/04/2009',
      autor: [{ nome: 'Ricardo Teixeira', email: 'ricardo@email.com' }],
      categoria: [{ nome: 'Fantasia' }],
      editora: { nome: 'Epic', site: 'epic.com' }
    },
    {
      isbn: '140',
      titulo: 'Sombras do Passado',
      sinopse: 'Segredos antigos voltam à tona',
      paginas: '230',
      data_lancamento: '13/07/2016',
      autor: [{ nome: 'Patricia Gomes', email: 'patricia@email.com' }],
      categoria: [{ nome: 'Mistério' }],
      editora: { nome: 'Enigma', site: 'enigma.com' }
    },
    {
      isbn: '141',
      titulo: 'A Chave Secreta',
      sinopse: 'Uma chave pode mudar o destino do mundo',
      paginas: '315',
      data_lancamento: '02/02/2014',
      autor: [{ nome: 'Eduardo Lopes', email: 'eduardo@email.com' }],
      categoria: [{ nome: 'Aventura' }],
      editora: { nome: 'Portal', site: 'portal.com' }
    },
    {
      isbn: '142',
      titulo: 'Horizonte Infinito',
      sinopse: 'Uma jornada filosófica sobre a vida',
      paginas: '210',
      data_lancamento: '27/08/2020',
      autor: [{ nome: 'Renata Carvalho', email: 'renata@email.com' }],
      categoria: [{ nome: 'Filosofia' }],
      editora: { nome: 'Sabedoria', site: 'sabedoria.com' }
    },
    {
      isbn: '143',
      titulo: 'Caçadores de Lendas',
      sinopse: 'Grupo busca criaturas lendárias',
      paginas: '360',
      data_lancamento: '18/10/2017',
      autor: [{ nome: 'Felipe Andrade', email: 'felipe@email.com' }],
      categoria: [{ nome: 'Fantasia' }],
      editora: { nome: 'Mitica', site: 'mitica.com' }
    }
  ];
};

