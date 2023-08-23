import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuizfabianoPageRoutingModule } from './luizfabiano-routing.module';

import { LuizfabianoPage } from './luizfabiano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuizfabianoPageRoutingModule
  ],
  declarations: [LuizfabianoPage]
})
export class LuizfabianoPageModule {}
