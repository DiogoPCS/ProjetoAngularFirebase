import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user:any={
    email:null,
    password:null,
    confirm_password:null
  };

  constructor(
    private message:MessageService,
    private crudService:CrudService
  ) { }

  ngOnInit() {
  }

  registrar(){
    if(this.user.password != this.user.confirm_password){
      this.message.show('Uma das senhas está errada!');
      return;
    }

    this.crudService.insert(this.user, 'user');

  }

}
