import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VitorPageRoutingModule } from './vitor-routing.module';

import { VitorPage } from './vitor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitorPageRoutingModule
  ],
  declarations: [VitorPage]
})
export class VitorPageModule {}
