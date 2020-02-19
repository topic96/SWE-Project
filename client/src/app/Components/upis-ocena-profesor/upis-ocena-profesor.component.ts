import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upis-ocena-profesor',
  templateUrl: './upis-ocena-profesor.component.html',
  styleUrls: ['./upis-ocena-profesor.component.css']
})
export class UpisOcenaProfesorComponent implements OnInit {

  constructor() { }

  panelOpenState = false;
  public showNext:boolean = false;

  public choose(arg:number){
    //arg predstavlja id izabrane godine
    console.log("Izabrana godina sa id-em: " + arg);
    this.showNext = true;
  }

  public godine = [
    {
      id: "0",
      godina: "Prva",
      brOdeljenja: "4"
    },
    {
      id: "1",
      godina: "Druga",
      brOdeljenja: "4"
    },
    {
      id: "2",
      godina: "Treca",
      brOdeljenja: "4"
    },
    {
      id: "3",
      godina: "Cetvrta",
      brOdeljenja: "4"
    }
  ]

  ngOnInit() {
  }

}
