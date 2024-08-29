import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-detalhes-pais',
  templateUrl: './ver-detalhes-pais.page.html',
  styleUrls: ['./ver-detalhes-pais.page.scss'],
})
export class VerDetalhesPaisPage {

  pais: any;

  constructor() { 
    this.getPais();
  }

  getPais() {

    fetch('https://restcountries.com/v3.1/alpha/' + history.state.codigo)
    .then( dados => dados.json() ) // converter os dados recebidos para json
    .then((dados) => {
      console.log(dados);
      this.pais = dados;
    }) // fazer as ações desejadas com os dados
    .catch((erro) => {
      console.log(erro);
    }) // exibir mensagens de erro
    .finally(() => {
      console.log('O processo foi finalizado!');
    }) // fazer alguma coisas quando finalizar tudo
  }




}
