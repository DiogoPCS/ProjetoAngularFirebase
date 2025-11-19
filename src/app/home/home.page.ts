import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  funcionario: any = {
    nome: null,
    sobrenome: null
  }

  constructor( 
    public apiService: APIService
    ){ 
      this.carregarFuncionarios();
    }
    carregarFuncionarios(){
      this.apiService.get('usuarios').subscribe((funcionarios=>{
        console.log(funcionarios)
      }))
    }

    cadastar()
      this.apiService.get('usuarios',this.funcionarios).subscribe((funcionarios=>{
        console.log(funcionarios)
      }))
    }
 

 

}
