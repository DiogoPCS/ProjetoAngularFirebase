import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CrudService } from '../services/crud.service';
import { AuthenticateService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: any = {
    email: null,
    password: null,
    confirm_password: null
  }

  constructor(
    private message: MessageService,
    private crudService: CrudService,
    private authService: AuthenticateService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  registrar(){
    if(this.user.password != this.user.confirm_password){
      this.message.show('As senhas não conferem!', 3000);
      return;
    }

    this.authService.register(this.user.email, this.user.password)
    .then(response => {
      if(response)
        this.router.navigate(['/login']);

    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log('Requisição Finalizada');
    })

  }

}
