import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhePaisPage } from './detalhe-pais.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhePaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhePaisPageRoutingModule {}
