import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class RegisterPage implements OnInit {

  user: any = {
    email: null,
    password: null,
  }

   constructor( 
          private message: MessageService,
          private crudService: CrudService
      ) { }

  ngOnInit() {
  }

  acessar(){
    this.crudService.fetchByOperatorParam('this.user.email', '==' 'email', 'user')
    .then()
    .catch(erro => {
      console.log(erro);
    })
    .finally( ()=>{
      console.log('Processo Finalizado');
    })
  }
}