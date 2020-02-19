import { Component, OnInit, Inject } from '@angular/core';
import { ObavestenjeComponentComponent } from '../obavestenje-component/obavestenje-component.component';

@Component({
  selector: 'app-novo-obavestenje',
  templateUrl: './novo-obavestenje.component.html',
  styleUrls: ['./novo-obavestenje.component.css']
})
export class NovoObavestenjeComponent implements OnInit {

  constructor(@Inject(ObavestenjeComponentComponent) private parent:ObavestenjeComponentComponent) { }

  ngOnInit() {
  }

}
