import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CrudService } from '../services/crud.service';
import { AuthenticateService } from '../services/auth.service';

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
      private crudService:CrudService,
      private authService: AuthenticateService,
    ) { }
  
    ngOnInit() {
    }
  
    acessar(){
        this.authService.login(this.user.email,this.user.password)
      }

    }