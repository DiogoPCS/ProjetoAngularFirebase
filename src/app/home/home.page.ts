import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  veiculo:any ={
    modelo:null,
    marca:null,
    cor:null
  }
  concessionaria: any=[];

  adicionar(){
    this.concessionaria.push(...this.veiculo);
    console.log(this.concessionaria)
 
  }

  
}