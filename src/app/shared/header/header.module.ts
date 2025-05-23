import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent //importamos sometente componentes
  ],
  imports: [
    CommonModule, 
    IonicModule //importamos outros modulos
  ],
  exports:[
    HeaderComponent //exporto aqui somente componentes 
  ]
})
export class HeaderModule { }
