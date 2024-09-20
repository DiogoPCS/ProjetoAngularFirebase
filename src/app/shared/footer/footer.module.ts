import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ],
  exports:[
    FooterComponent
  ]
})
export class HeaderModule { }
