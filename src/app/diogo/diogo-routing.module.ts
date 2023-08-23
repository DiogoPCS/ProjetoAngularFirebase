import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiogoPage } from './diogo.page';

const routes: Routes = [
  {
    path: '',
    component: DiogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiogoPageRoutingModule {}
