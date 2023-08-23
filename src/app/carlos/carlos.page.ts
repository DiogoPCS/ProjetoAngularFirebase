import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlos',
  templateUrl: './carlos.page.html',
  styleUrls: ['./carlos.page.scss'],
})
export class CarlosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selected: any = 'escolaridade';

  trocar(event: any){

  }

}
