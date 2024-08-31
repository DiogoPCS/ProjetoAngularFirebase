import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhePaisPageRoutingModule } from './detalhe-pais-routing.module';

import { DetalhePaisPage } from './detalhe-pais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhePaisPageRoutingModule
  ],
  declarations: [DetalhePaisPage]
})
export class DetalhePaisPageModule {}
