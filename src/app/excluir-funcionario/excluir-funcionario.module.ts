import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcluirFuncionarioPageRoutingModule } from './excluir-funcionario-routing.module';

import { ExcluirFuncionarioPage } from './excluir-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcluirFuncionarioPageRoutingModule
  ],
  declarations: [ExcluirFuncionarioPage]
})
export class ExcluirFuncionarioPageModule {}
