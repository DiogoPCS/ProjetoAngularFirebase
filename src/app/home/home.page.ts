import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paises:any;
  isLoading: boolean = false;

  constructor(
    private router: Router
  ){
    this.getPaisCode();
   }

  getPaisCode(){
    this.isLoading = true;
    fetch('https://restcountries.com/v3.1/all?fields=name,ccn3,flags,capital,population,area,region,subregion,timezone')
    .then( dados => dados.json() )
    .then( dados => {
      console.log(dados);
      this.paises = dados;
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally( () => {
      this.isLoading = false;
      //console.log('Processo Finalizado!');
    } )
  }

  verDetalhes(ccn3: any){
    this.router.navigate(['/detalhe-pais'], {
      state: { codigo: ccn3 }
    });
    console.log(ccn3);
  }

}
