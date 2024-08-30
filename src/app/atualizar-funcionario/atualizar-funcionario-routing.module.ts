import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarFuncionarioPage } from './atualizar-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarFuncionarioPageRoutingModule {}
