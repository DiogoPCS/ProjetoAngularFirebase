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

 projeto: any [] = [
  { descricao: 'Banho', local: 'Casa', hora_inicio: '18:00', hora_termino: '18:10', status: 'Concluído'},
  { descricao: 'Estudar', local: 'Casa', hora_inicio: '18:30', hora_termino: '21:00', status: 'Em andamento'},
  { descricao: 'Dormir', local: 'Casa', hora_inicio: '22:00', hora_termino: '05:30', status: 'Em espera'},
  { descricao: 'Ponto-Onibus', local: 'Rua', hora_inicio: '05:50', hora_termino: '06:00', status: 'Em espera'},
  { descricao: 'Ir-Escola', local: 'Centro-Cidade', hora_inicio: '06:00', hora_termino: '06:30', status: 'Em espera'}
 ];

}
