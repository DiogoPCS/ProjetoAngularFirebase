import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarFuncionarioPage } from './cadastrar-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarFuncionarioPageRoutingModule {}
