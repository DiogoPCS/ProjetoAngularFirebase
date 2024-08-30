import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarFuncionarioPageRoutingModule } from './listar-funcionario-routing.module';

import { ListarFuncionarioPage } from './listar-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarFuncionarioPageRoutingModule
  ],
  declarations: [ListarFuncionarioPage]
})
export class ListarFuncionarioPageModule {}
