import { Component, OnInit, Inject } from '@angular/core';
import { UpisOcenaProfesorComponent } from '../upis-ocena-profesor/upis-ocena-profesor.component';

@Component({
  selector: 'app-lista-odeljenja',
  templateUrl: './lista-odeljenja.component.html',
  styleUrls: ['./lista-odeljenja.component.css']
})
export class ListaOdeljenjaComponent implements OnInit {

  constructor(@Inject(UpisOcenaProfesorComponent) private parent:UpisOcenaProfesorComponent) { }

  panelOpenState = false;
  public showOdeljenje:boolean = false;

  public choose(arg:number){
    //dobija se id odeljenja koji se moze dalje koristiti
    console.log("Izabran id odeljenja: " + arg);
    this.showOdeljenje = true;
  }

  public back(){
    this.parent.showNext = false;
  }

  odeljenjaData = [
    {
      id: "0",
      Razred: "IV1",
      brojDjaka: "30"
    },
    {
      id: "1",
      Razred: "IV2",
      brojDjaka: "31"
    },
    {
      id: "2",
      Razred: "IV3",
      brojDjaka: "31"
    }
  ]

  ngOnInit() {
  }

}
