import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-desna-strana-component',
  templateUrl: './desna-strana-component.component.html',
  styleUrls: ['./desna-strana-component.component.css']
})
export class DesnaStranaComponentComponent implements OnInit {

  constructor(@Inject(AppComponent) public parent:AppComponent) { }
  public rang:number = this.parent.userRang; //koristiti za prikazivanje raznih komponenti preko ngif-a
  ngOnInit() {
  }

}
