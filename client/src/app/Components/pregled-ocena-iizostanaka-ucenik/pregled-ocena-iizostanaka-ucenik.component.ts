import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregled-ocena-iizostanaka-ucenik',
  templateUrl: './pregled-ocena-iizostanaka-ucenik.component.html',
  styleUrls: ['./pregled-ocena-iizostanaka-ucenik.component.css']
})
export class PregledOcenaIIzostanakaUcenikComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public display:boolean = true;

  displayedColumns: string[] = ['Naziv_predmeta', 'Ocene'];
  public sveOcene:object[] = [
    {
      Predmet: "Matematika",
      Ocene: [4, 5, 5]
    },
    {
      Predmet: "Srpski jezik",
      Ocene: [5, 5, 4]
    },
    {
      Predmet: "Fizika",
      Ocene: [5, 4, 5]
    },
    {
      Predmet: "Logika",
      Ocene: [5, 3, 5]
    },
    {
      Predmet: "Istorija",
      Ocene: [5, 5, 5]
    }
  ]

  public getProsek(){
    var prosek = 0;
    var s = 0;
    for (const i of this.sveOcene) {
      for (const j of i['Ocene']) //proveriti da li radi, jako je klimavo
      {
        prosek += j;
        s++;
      }
    }
    return (prosek/s).toFixed(2);
  }

  public seeNext(){
    this.display = false;
  }

}
