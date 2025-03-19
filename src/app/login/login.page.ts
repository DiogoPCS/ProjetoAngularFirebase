import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any={
      email:null,
      password:null
    };
  
    constructor(
      private message:MessageService,
      private crudService:CrudService
    ) { }
  
    ngOnInit() {
    }
  
    acessar(){

      this.crudService.fetchByOperatorParam(this.user.email,'==','email','user')
      .then(response =>{
        console.log(response)
      })
      .catch(erro =>{
        console.log(erro);
      })
      .finally(()=>{
        console.log('Processo finalizado')
      })

    }
}
