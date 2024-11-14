import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

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
  ) { }



  ngOnInit() {
  }
 salvar(){
  console.log(this.carro);
   this.crudservice.insert(this.carro,'carros')

 }
}
