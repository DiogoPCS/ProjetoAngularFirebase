import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementerComponent } from './incrementer.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [IncrementerComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[
    IncrementerComponent
  ]
})
export class IncrementerModule { }
