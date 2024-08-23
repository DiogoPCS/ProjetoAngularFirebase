import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesenvolvedorPageRoutingModule } from './desenvolvedor-routing.module';

import { DesenvolvedorPage } from './desenvolvedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesenvolvedorPageRoutingModule
  ],
  declarations: [DesenvolvedorPage]
})
export class DesenvolvedorPageModule {}
