import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndpointPageRoutingModule } from './endpoint-routing.module';

import { EndpointPage } from './endpoint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndpointPageRoutingModule
  ],
  declarations: [EndpointPage]
})
export class EndpointPageModule {}
