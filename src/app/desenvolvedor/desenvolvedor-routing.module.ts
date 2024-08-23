import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesenvolvedorPage } from './desenvolvedor.page';

const routes: Routes = [
  {
    path: '',
    component: DesenvolvedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesenvolvedorPageRoutingModule {}
