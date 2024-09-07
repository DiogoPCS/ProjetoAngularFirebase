import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  pokemons: any;

  constructor() { }

  getPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=5')
    .then( dados => dados.json() )
    .then(dados => {
      console.log(dados);
      this.pokemons = dados.results;
    })
    .catch( _ => { 
      console.log(_);
    })
    .finally( ()=> {
      console.log('Finalizado');
    })
  }
}
