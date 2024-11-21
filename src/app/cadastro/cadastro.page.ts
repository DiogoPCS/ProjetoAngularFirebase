import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { AlertController } from '@ionic/angular';
import { triggerAsyncId } from 'async_hooks';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {




carro2:any=[];


carro: any={
  nome:null,
  cor:null,
  ano:null,
  topspeed: null,
  tipo: null,
  foto:null, 
}



  constructor(
    public crudservice: CrudService
  ) { 
     this.getCarro2();

  }



  ngOnInit() {
  }
 salvar(){
  console.log(this.carro);
   this.crudservice.insert(this.carro,'carros')
   this.getCarro2();
 }

 getCarro2(){
  this.crudservice.fetchAll('carros')
  .then(resp =>{
    console.log(resp);
    this.carro2 = resp;
  })
 }

 remover(id:any){
  alert(id);
  this.crudservice.remove(id, 'carros')
  .then(() => {
    this.getCarro2();
  })
 }
}
