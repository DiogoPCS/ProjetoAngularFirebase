import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: any = {
    email: null,
    password: null,
    corfirm_password: null
  }

   constructor( 
          private message: MessageService,
          private crudService: CrudService
      ) { }

  ngOnInit() {
  }

  registrar(){
    if(this.user.password != this.user.corfirm_password) {
        this.message.show('As senhas não conferem', 3000);
        return;
    }

    this.crudService.insert(this.user, 'user');
  }

}