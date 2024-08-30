import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarFuncionarioPageRoutingModule } from './cadastrar-funcionario-routing.module';

import { CadastrarFuncionarioPage } from './cadastrar-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarFuncionarioPageRoutingModule
  ],
  declarations: [CadastrarFuncionarioPage]
})
export class CadastrarFuncionarioPageModule {}
