import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.page.html',
  styleUrls: ['./cadastrar-funcionario.page.scss'],
})
export class CadastrarFuncionarioPage implements OnInit {

  funcionarios: any;
  funcionario ={
    codigo: null,
    nome: null,
    sobrenome: null,
    cargo: null,
    salario: null,
    data_nascimento: null,
    endereco: null,
    cidade: null,
    cep: null,
    pais: null,
    fone: null

  }


  constructor() { }

  ngOnInit() {
  }

  cadastrar(){
    fetch('#')
    .then( dados => dados.json())
    .then( dados =>{
      console.log(dados);
      this.funcionarios = dados;
    })
    .catch( erro =>{
      console.log(erro);
    })
    .finally(()=>{
      console.log('Finalizado!');
    })
  }

}
