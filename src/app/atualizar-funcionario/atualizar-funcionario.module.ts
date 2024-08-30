import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarFuncionarioPageRoutingModule } from './atualizar-funcionario-routing.module';

import { AtualizarFuncionarioPage } from './atualizar-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarFuncionarioPageRoutingModule
  ],
  declarations: [AtualizarFuncionarioPage]
})
export class AtualizarFuncionarioPageModule {}
