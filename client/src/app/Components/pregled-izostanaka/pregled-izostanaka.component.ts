import { Component, OnInit, Inject } from '@angular/core';
import { DetePregledComponent } from '../dete-pregled/dete-pregled.component';

@Component({
  selector: 'app-pregled-izostanaka',
  templateUrl: './pregled-izostanaka.component.html',
  styleUrls: ['./pregled-izostanaka.component.css']
})
export class PregledIzostanakaComponent implements OnInit {

  constructor(@Inject(DetePregledComponent)private parent:DetePregledComponent) { }

  public back(){
    this.parent.napomeneShow();
  }

  displayedColumnsIzo: string[] = ['Datum', 'Opravdan', 'Predmet'];
  displayedColumnsNap: string[] = ['Datum', 'Razlog', 'Predmet'];
  public napomene:object[] = [
    {
      Datum: "12.02.2015.",
      Razlog: "Neprikladno ponasanje",
      Predmet: "Srpski jezik"
    },
    {
      Datum: "12.02.2015.",
      Razlog: "Neprikladno ponasanje",
      Predmet: "Matematika"
    },
    {
      Datum: "12.02.2015.",
      Razlog: "Neprikladno ponasanje",
      Predmet: "Hemija"
    },
    {
      Datum: "12.02.2015.",
      Razlog: "Neprikladno ponasanje",
      Predmet: "Hemija"
    },
    {
      Datum: "12.02.2015.",
      Razlog: "Neprikladno ponasanje",
      Predmet: "Hemija"
    },
    {
      Datum: "12.02.2015.",
      Razlog: "Neprikladno ponasanje",
      Predmet: "Hemija"
    },
    {
      Datum: "12.02.2015.",
      Razlog: "Neprikladno ponasanje",
      Predmet: "Hemija"
    }
  ]
  public izostanci:object[] = [
    {
      Datum: "12.02.2015.",
      Opravdan: "Da",
      Predmet: "Srpski jezik"
    },
    {
      Datum: "20.02.2015.",
      Opravdan: "Ne",
      Predmet: "Srpski jezik"
    },
    {
      Datum: "18.02.2015.",
      Opravdan: "Ne",
      Predmet: "Srpski jezik"
    },
    {
      Datum: "14.03.2015.",
      Opravdan: "Da",
      Predmet: "Srpski jezik"
    }
  ]
  ngOnInit() {
  }

}
