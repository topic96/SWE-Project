import { Component, OnInit, Inject } from '@angular/core';
import { PregledOcenaIIzostanakaUcenikComponent } from '../pregled-ocena-iizostanaka-ucenik/pregled-ocena-iizostanaka-ucenik.component';

@Component({
  selector: 'app-pregled-izostanaka-napomena-ucenik',
  templateUrl: './pregled-izostanaka-napomena-ucenik.component.html',
  styleUrls: ['./pregled-izostanaka-napomena-ucenik.component.css']
})
export class PregledIzostanakaNapomenaUcenikComponent implements OnInit {

  constructor(@Inject(PregledOcenaIIzostanakaUcenikComponent) private parent:PregledOcenaIIzostanakaUcenikComponent) { }

  ngOnInit() {
  }

  public showPath:boolean = true;
  public showN:boolean = false;
  public showI:boolean = false;

  public displayedColumns = ["Datum", "Opravdan", "Predmet"];
  public displayedColumns1 = ["Datum", "Razlog", "Predmet"];

  public back(){
    if(this.showPath){
      this.parent.display = true;
    }
    else if (this.showN){
      this.showPath = true;
      this.showN = false;
    }
    else if(this.showI){
      this.showPath = true;
      this.showI = false;
    }
  }

  public selectedN(){
    this.showPath = false;
    this.showN = true;
  }

  public selectedI(){
    this.showPath = false;
    this.showI = true;
  }

  public sviIzostanci = [
    {
      id: 0,
      datum: "12.01.2018.",
      opravdan: "Da",
      predmet: "Srpski jezik"
    },
    {
      id: 1,
      datum: "12.02.2018.",
      opravdan: "Ne",
      predmet: "Engleski jezik"
    },
    {
      id: 2,
      datum: "12.01.2017.",
      opravdan: "Da",
      predmet: "Matematika"
    }
  ]

  public sveNapomene = [
    {
      id: 0,
      datum: "12.01.2017.",
      razlog: "Nedolicno ponasanje",
      predmet: "Biologija"
    },
    {
      id: 1,
      datum: "12.01.2017.",
      razlog: "Nedolicno ponasanje",
      predmet: "Geografija"
    },
    {
      id: 2,
      datum: "12.01.2017.",
      razlog: "Nedolicno ponasanje",
      predmet: "Biologija"
    }
  ]

}
