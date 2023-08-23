import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesenvolvedoresPage } from './desenvolvedores.page';

const routes: Routes = [
  {
    path: '',
    component: DesenvolvedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesenvolvedoresPageRoutingModule {}
