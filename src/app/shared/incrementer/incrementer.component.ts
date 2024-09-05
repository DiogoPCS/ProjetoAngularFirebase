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
  this.valor--


}
incrementar(){
  this.valor++

}

}
