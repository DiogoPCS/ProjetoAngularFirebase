import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { IProduto } from './produtos.interface';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

//   livros: ILivro[] = [
//   { isbn: '124', 
//     titulo: 'Dom Casmurro',
//     categoria:[ 
//       {nome: 'romance'},
//       {nome: 'drama'},
//       {nome: 'classico'}
//     ]
//   },
//   { isbn: '125', 
//     titulo: 'O Pequeno Príncipe',
//     categoria:[ 
//       {nome: 'fantasia'},
//       {nome: 'infantil'},
//       {nome: 'filosofico'}
//     ]
//   },
//   { isbn: '126', 
//     titulo: '1984',
//     categoria:[ 
//       {nome: 'ficcao'},
//       {nome: 'politica'},
//       {nome: 'distopia'}
//     ]
//   },
//   { isbn: '127', 
//     titulo: 'O Senhor dos Anéis',
//     categoria:[ 
//       {nome: 'fantasia'},
//       {nome: 'aventura'},
//       {nome: 'epico'}
//     ]
//   },
//   { isbn: '128', 
//     titulo: 'A Revolução dos Bichos',
//     categoria:[ 
//       {nome: 'politica'},
//       {nome: 'satira'},
//       {nome: 'ficcao'}
//     ]
//   },
//   { isbn: '129', 
//     titulo: 'Harry Potter e a Pedra Filosofal',
//     categoria:[ 
//       {nome: 'fantasia'},
//       {nome: 'aventura'},
//       {nome: 'magia'}
//     ]
//   },
//   { isbn: '130', 
//     titulo: 'O Código Da Vinci',
//     categoria:[ 
//       {nome: 'suspense'},
//       {nome: 'misterio'},
//       {nome: 'religiao'}
//     ]
//   },
//   { isbn: '131', 
//     titulo: 'It: A Coisa',
//     categoria:[ 
//       {nome: 'terror'},
//       {nome: 'suspense'},
//       {nome: 'drama'}
//     ]
//   },
//   { isbn: '132', 
//     titulo: 'Drácula',
//     categoria:[ 
//       {nome: 'terror'},
//       {nome: 'classico'},
//       {nome: 'gótico'}
//     ]
//   },
//   { isbn: '133', 
//     titulo: 'O Hobbit',
//     categoria:[ 
//       {nome: 'fantasia'},
//       {nome: 'aventura'},
//       {nome: 'epico'}
//     ]
//   },
//   { isbn: '134', 
//     titulo: 'Orgulho e Preconceito',
//     categoria:[ 
//       {nome: 'romance'},
//       {nome: 'classico'},
//       {nome: 'drama'}
//     ]
//   },
//   { isbn: '135', 
//     titulo: 'O Alquimista',
//     categoria:[ 
//       {nome: 'ficcao'},
//       {nome: 'filosofico'},
//       {nome: 'aventura'}
//     ]
//   },
//   { isbn: '136', 
//     titulo: 'A Menina que Roubava Livros',
//     categoria:[ 
//       {nome: 'drama'},
//       {nome: 'historico'},
//       {nome: 'guerra'}
//     ]
//   },
//   { isbn: '137', 
//     titulo: 'Jogos Vorazes',
//     categoria:[ 
//       {nome: 'ficcao'},
//       {nome: 'acao'},
//       {nome: 'distopia'}
//     ]
//   },
//   { isbn: '138', 
//     titulo: 'Percy Jackson e o Ladrão de Raios',
//     categoria:[ 
//       {nome: 'fantasia'},
//       {nome: 'aventura'},
//       {nome: 'mitologia'}
//     ]
//   },
//   { isbn: '139', 
//     titulo: 'O Iluminado',
//     categoria:[ 
//       {nome: 'terror'},
//       {nome: 'psicologico'},
//       {nome: 'suspense'}
//     ]
//   },
//   { isbn: '140', 
//     titulo: 'Sherlock Holmes: Um Estudo em Vermelho',
//     categoria:[ 
//       {nome: 'misterio'},
//       {nome: 'investigacao'},
//       {nome: 'classico'}
//     ]
//   },
//   { isbn: '141', 
//     titulo: 'Cem Anos de Solidão',
//     categoria:[ 
//       {nome: 'realismo magico'},
//       {nome: 'drama'},
//       {nome: 'classico'}
//     ]
//   },
//   { isbn: '142', 
//     titulo: 'A Culpa é das Estrelas',
//     categoria:[ 
//       {nome: 'romance'},
//       {nome: 'drama'},
//       {nome: 'jovem adulto'}
//     ]
//   },
//   { isbn: '143', 
//     titulo: 'O Nome do Vento',
//     categoria:[ 
//       {nome: 'fantasia'},
//       {nome: 'aventura'},
//       {nome: 'epico'}
//     ]
//   }
// ];

produtos: IProduto[] = [
  { id: 1, 
    nome: 'Produto 1',
     preco: 10.99, 
     descricao: 'Descrição do Produto 1'},

  { id: 2, nome: 'Produto 2',
     preco: 19.99,
     descricao: 'Descrição do Produto 2'
     },
  { id: 3, 
    nome: 'Produto 3', 
    preco: 5.49, 
    descricao: 'Descrição do Produto 3' },
];

}
