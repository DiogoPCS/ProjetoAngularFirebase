import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatheusPage } from './matheus.page';

const routes: Routes = [
  {
    path: '',
    component: MatheusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatheusPageRoutingModule {}
