import { Component} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  url: string = `https://restcountries.com/v3.1/all?fields=name,flags`;
  is_loading: boolean = false;
  dados: any = null;

  constructor(){
    fetch(this.url)
    .then(dados => dados.json() )//converter os dados
    .then(dados => {
      console.log(dados);
      this.dados = dados;
    })// exibir os dados
    .catch(_ => {
      console.log(_);
    })//tratar possiveis erros
    .finally(() => {
      console.log('Requisição Finalizada!');
    })//exibir que finalizou
  }

}
