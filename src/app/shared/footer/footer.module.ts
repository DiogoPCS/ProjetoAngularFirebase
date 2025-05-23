import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
      FooterComponent //exporto aqui somente componentes 
    ]
})
export class FooterModule { }
