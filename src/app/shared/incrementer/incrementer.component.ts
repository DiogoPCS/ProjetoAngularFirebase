import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss'],
})
export class IncrementerComponent  implements OnInit {


valor: number = 0;



  constructor() { }

  ngOnInit() {}
  
decrementar(){
  if(
  this.valor >0){
    this.valor--
  }


}
incrementar(){
  this.valor++

}

}
