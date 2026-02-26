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
  { descrcao: 'tomar banho', local: 'casa', hora_inicio: '19:00', hora_termino: '00:02', status: 'em espera'  },
  { descrcao: 'beber água', local: 'qualquer', hora_inicio: '00:00', hora_termino: '23:59', status: 'em espera'  },
  { descrcao: 'dormir', local: 'qualquer preferencia escola', hora_inicio: '13:10', hora_termino: '18:30', status: 'em espera'  },
  { descrcao: 'comer', local: 'qualquer', hora_inicio: '12:00', hora_termino: '12:32', status: 'em espera'  },
];

}
