import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndpointPage } from './endpoint.page';

const routes: Routes = [
  {
    path: '',
    component: EndpointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndpointPageRoutingModule {}
