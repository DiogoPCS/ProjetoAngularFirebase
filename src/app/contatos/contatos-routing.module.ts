import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosPage } from './contatos.page';

const routes: Routes = [
  {
    path: '',
    component: ContatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatosPageRoutingModule {}
