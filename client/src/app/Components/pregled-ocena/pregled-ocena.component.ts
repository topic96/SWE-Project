import { Component, OnInit, Inject } from '@angular/core';
import { DetePregledComponent } from '../dete-pregled/dete-pregled.component';

@Component({
  selector: 'app-pregled-ocena',
  templateUrl: './pregled-ocena.component.html',
  styleUrls: ['./pregled-ocena.component.css']
})
export class PregledOcenaComponent implements OnInit {

  constructor(@Inject(DetePregledComponent)private parent:DetePregledComponent) { }

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
    }
  ]

  public back(){
    this.parent.oceneShow();
  }

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

  ngOnInit() {
  }

}
