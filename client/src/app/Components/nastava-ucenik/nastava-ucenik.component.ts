import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nastava-ucenik',
  templateUrl: './nastava-ucenik.component.html',
  styleUrls: ['./nastava-ucenik.component.css']
})
export class NastavaUcenikComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public displayedColumns = ["br", "pon", "uto", "sre", "cet", "pet"];

  public dataSource = [
    {
      br: 1,
      pon: "Matematika",
      uto: "Matematika",
      sre: "Matematika",
      cet: "Matematika",
      pet: "Srpski jezik"
    },
    {
      br: 2,
      pon: "Matematika",
      uto: "Matematika",
      sre: "Matematika",
      cet: "Matematika",
      pet: "Hemija"
    },
    {
      br: 3,
      pon: "Matematika",
      uto: "Matematika",
      sre: "Matematika",
      cet: "Matematika",
      pet: "Hemija"
    },
    {
      br: 4,
      pon: "Matematika",
      uto: "Matematika",
      sre: "Matematika",
      cet: "Matematika",
      pet: "Biologija"
    },
    {
      br: 5,
      pon: "Matematika",
      uto: "Matematika",
      sre: "Matematika",
      cet: "Matematika",
      pet: "Hemija"
    },
    {
      br: 6,
      pon: "Matematika",
      uto: "Matematika",
      sre: "Matematika",
      cet: "Matematika",
      pet: "Fizika"
    },
    {
      br: 7,
      pon: "Matematika",
      uto: "",
      sre: "Matematika",
      cet: "",
      pet: ""
    }
  ]

  /*
  public dataSource = [
    {
      dan: "Ponedeljak",
      casovi: ["Matematika", "Matematika", "Srpski jezik", "Engleski jezik", "Istorija", "Latinski jezik", ""]
    },
    {
      dan: "Utorak",
      casovi: ["Muzicko vaspitanje", "Likovno vaspitanje", "Fizicko vaspitanje", "Fizicko vaspitanje", "Matematika", "Biologija", "Hemija"]
    },
    {
      dan: "Sreda",
      casovi: ["Fizika", "Srpski jezik", "Srpski jezik", "Logika", "Logika", "Geografija", ""]
    },
    {
      dan: "Cetvrtak",
      casovi: ["Geografija", "Fizicko vaspitanje", "Fizicko vaspitanje", "Istorija", "Biologija", "Engleski jezik", ""]
    },
    {
      dan: "Petak",
      casovi: ["Latinski jezik", "Engleski jezik", "Matematika", "Srpski jezik", "Hemija", "Fizika", "Geografija"]
    }
  ]*/

}
