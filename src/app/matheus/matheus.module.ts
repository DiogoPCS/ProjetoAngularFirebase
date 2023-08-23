import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatheusPageRoutingModule } from './matheus-routing.module';

import { MatheusPage } from './matheus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatheusPageRoutingModule
  ],
  declarations: [MatheusPage]
})
export class MatheusPageModule {}
