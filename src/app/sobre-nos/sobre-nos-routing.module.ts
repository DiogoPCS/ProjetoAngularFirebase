import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreNosPage } from './sobre-nos.page';

const routes: Routes = [
  {
    path: '',
    component: SobreNosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreNosPageRoutingModule {}
