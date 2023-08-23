import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitorPage } from './vitor.page';

const routes: Routes = [
  {
    path: '',
    component: VitorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VitorPageRoutingModule {}
