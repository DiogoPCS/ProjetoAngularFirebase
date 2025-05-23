import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatosPageRoutingModule } from './contatos-routing.module';

import { ContatosPage } from './contatos.page';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { CarouselModule } from '../shared/carousel/carousel.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatosPageRoutingModule,
     HeaderModule,
        FooterModule,
        CarouselModule
  ],
  declarations: [ContatosPage]
})
export class ContatosPageModule {}
