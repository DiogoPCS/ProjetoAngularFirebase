import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuizfabianoPage } from './luizfabiano.page';

const routes: Routes = [
  {
    path: '',
    component: LuizfabianoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuizfabianoPageRoutingModule {}
