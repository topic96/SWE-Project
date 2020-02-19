import {Component, OnInit, Inject} from '@angular/core';
import { AppComponent } from '../../app.component';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent:AppComponent) { }

  private rangUsera:number = this.parent.userRang;
  ngOnInit() {
  }

  public logOut(){
    this.parent.logInTest = true;
    this.parent.changeView(0);
  }

}