import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  projeto: any[] = [
    { descricao: "tomar banho",local: "casa", hora_inicio: "19:00" , hora_termino: "22:55", status: "em espera" }, 
    { descricao: "beber agua",local: "todos", hora_inicio: "18:00" , hora_termino: "06:05", status: "em progresso" }, 
    { descricao: "lavar cabelo",local: "casa", hora_inicio: "08:00" , hora_termino: "08:55", status: "em espera" }, 
    { descricao: "dormir",local: "casa", hora_inicio: "23:01" , hora_termino: "08:00", status: "em espera" }, 
  ];
}
