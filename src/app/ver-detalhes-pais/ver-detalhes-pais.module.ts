import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerDetalhesPaisPageRoutingModule } from './ver-detalhes-pais-routing.module';

import { VerDetalhesPaisPage } from './ver-detalhes-pais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerDetalhesPaisPageRoutingModule
  ],
  declarations: [VerDetalhesPaisPage]
})
export class VerDetalhesPaisPageModule {}
