import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiogoPageRoutingModule } from './diogo-routing.module';

import { DiogoPage } from './diogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiogoPageRoutingModule
  ],
  declarations: [DiogoPage]
})
export class DiogoPageModule {}
