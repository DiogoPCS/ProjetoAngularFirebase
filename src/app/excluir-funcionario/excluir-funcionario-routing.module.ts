import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluirFuncionarioPage } from './excluir-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluirFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluirFuncionarioPageRoutingModule {}
