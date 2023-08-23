import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarlosPageRoutingModule } from './carlos-routing.module';

import { CarlosPage } from './carlos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarlosPageRoutingModule
  ],
  declarations: [CarlosPage]
})
export class CarlosPageModule {}
