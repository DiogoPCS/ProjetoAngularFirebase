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

  projeto: any = [
    { descricao: "tomar banho", local: "casa", hora_inicio: "19:00", hora_termino: "22:50", status: "em espera" },
    { descricao: "beber água", local: "escola", hora_inicio: "18:30", hora_termino: "18:31", status: "em espera" },
    { descricao: "enviar e-mail", local: "casa", hora_inicio: "06:00", hora_termino: "07:00", status: "concluído" },
    { descricao: "alimentar o doguinho", local: "casa", hora_inicio: "19:30", hora_termino: "20:00", status: "em progresso" },
  ];

}
