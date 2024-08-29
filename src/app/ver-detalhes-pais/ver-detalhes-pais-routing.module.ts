import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerDetalhesPaisPage } from './ver-detalhes-pais.page';

const routes: Routes = [
  {
    path: '',
    component: VerDetalhesPaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerDetalhesPaisPageRoutingModule {}
