import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregled-dece-roditelj',
  templateUrl: './pregled-dece-roditelj.component.html',
  styleUrls: ['./pregled-dece-roditelj.component.css']
})
export class PregledDeceRoditeljComponent implements OnInit {

  constructor() { }

  public showChildren = true;
  public childId:number = null;
  public biraj(arg:number){
    this.childId = arg;
    //console.log(this.childId); //f-ja ima id deteta sa njime moze da vuce iz baze sve potrebne
    this.showChildren = false;  //podatke za pregled odredjenog deteta
  }

  public deca = [
    {
      "id": "0",
      "Ime": "Ivan",
      "Prezime": "Jovic",
      "Razred": "IV-5",
      "Razredni": "Dejan Stankovic",
      "Prosek": "4.84"
    },
    {
      "id": "1",
      "Ime": "Ivana",
      "Prezime": "Jovic",
      "Razred": "II-3",
      "Razredni": "Natasa Bikic",
      "Prosek": "5.00"
    }
  ]

  ngOnInit() {
  }

}
