import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css']
})
export class ContentComponentComponent implements OnInit {
  public testLog:boolean;
  constructor(@Inject(AppComponent) public parent:AppComponent) {}

  ngOnInit() {
  }

}
