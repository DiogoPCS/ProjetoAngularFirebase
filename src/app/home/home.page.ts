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

  usuario: any ={
    email: null,
    senha: null
  }
  id: any;

  recado = {
    assunto: null,
    mensagem: null
  }
  recados: any =[];
  enviar(){ 
    this.crudservice.insert(this.recado, 'recados');
  }

  carregar(){
    this.recados = [];
    this.crudservice.fetchAll('recados')
    .then((response) => {
      this.recados = response;
      console.log(this.recados);
    })
    .catch((erro) => {
      console.log(erro);
    })
    .finally(() => {
      console.log("processo finalizado");
    })
  }

  remover(id: string){
    this.crudservice.remove(id, 'recados');
    this.carregar();
  }

  selecionar(recado: any){
    this.id = recado.id
    this.recado = recado; 
  }

  atualizar(){
    this.crudservice.update(this.id, this.recado, 'recados')
  }

  registrar(){
      this.authService.register(this.usuario.email, this.usuario.senha);
  }

  login(){
    this.authService.login(this.usuario.email, this.usuario.senha);
  }


  constructor(
    public crudservice: CrudService,
    public authService: AuthenticateService
  ){}

  pessoa = {
    foto: 'https://professionalmoron.com/wp-content/uploads/2012/05/alpaca-985158_640.jpg',
    nome: 'Pombinha da Paz silva',
    objetivo: 'Programador HTML & CSS',
    contato: {    
      email: 'Pombinha@hotmail.com',
      telefone: '(11) 996666666',
      github: 'github.com/pombinha',
      linkedin: 'linkedin.com/pombinha',
    },

    softskills: [
      'Comunicação',
      'Produtividade',
      'Trabalho em Grupo',
    ],

    formacao: [
      {
        ano_inicio: '2022',
        ano_fim: '2024',
        instituicao: 'Etec Sales Gomes',
        curso: 'Tecnico Desenvolvimento de Sistemas',
      },
      {
        ano_inicio: '2025',
        ano_fim: '2027',
        instituicao: 'Faculdade de Tecnologia FATEC',
        curso: 'Superior em Análise e Desenvolvimento de Sistemas',
      }
    ],

    Progeto:[
      {
        ano: '2023',
        instituicao: 'Etec Sales Gomes',
        nome_projeto: 'Etec de Portas abertas',
        descricao: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius natus atque cupiditate eum quidem quas voluptatibus dolore nisi. Nisi nostrum eveniet ratione vel consectetur commodi dolores culpa necessitatibus architecto.',
      }
    ]





  }

}
