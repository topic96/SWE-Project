import { Component, OnInit, Inject } from '@angular/core';
import { PregledDeceRoditeljComponent } from '../pregled-dece-roditelj/pregled-dece-roditelj.component'

@Component({
  selector: 'app-dete-pregled',
  templateUrl: './dete-pregled.component.html',
  styleUrls: ['./dete-pregled.component.css']
})
export class DetePregledComponent implements OnInit {

  constructor(@Inject(PregledDeceRoditeljComponent)private parent:PregledDeceRoditeljComponent) { }

  public oceneTest = false;
  public napomeneTest = false;
  public showCard = true;
  public back(){
    this.parent.showChildren = true;
  }

  public oceneShow(){
    this.showCard = !this.showCard;
    this.oceneTest = !this.oceneTest;
  }

  public napomeneShow(){
    this.showCard = !this.showCard;
    this.napomeneTest = !this.napomeneTest;
  }

  ngOnInit() {
  }

}
