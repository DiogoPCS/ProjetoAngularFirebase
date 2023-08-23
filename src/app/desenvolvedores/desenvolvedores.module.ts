import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesenvolvedoresPageRoutingModule } from './desenvolvedores-routing.module';

import { DesenvolvedoresPage } from './desenvolvedores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesenvolvedoresPageRoutingModule
  ],
  declarations: [DesenvolvedoresPage]
})
export class DesenvolvedoresPageModule {}
