import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import * as moment  from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 data_selecionada:string=''; 
 data_inicial:any;
 data_atual:any;
 dias_vividos:number=0;
  constructor( 
  ){ }
definirData(event:any){
console.log(event);
this.data_selecionada= event.detail.value;
}

definirDataDeNacimento(event:any){
  this.data_inicial=event.detail.value;
}
definirDataAtual(event:any){
  this.data_atual=event.detail.value;
  this.calcularDiasVividos();

}
calcularDiasVividos(){
  const d1 =moment(this.data_inicial);
  const d2 = moment(this.data_atual);
  this.dias_vividos =d2.diff(d1,'days');
}
}
