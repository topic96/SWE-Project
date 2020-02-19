import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public logInTest:boolean = true;
  public userId = "5b7850a794045e6e02b417ab"; //hardkodirano za sada
  public userRang:number = null; //0-ucenik; 1-roditelj; 2-profa; 3-admin
  public showTest:boolean[] = [true, false, false, false, false, false, false, false, false, false];
  /*
    Logika, niz boolova. 
    0-pocetna
    1-profil
    2-nastava
    3-ocene
    4-forum
    /*profa
    5-upis ocena
    */
    /*admin
    6-pregled i izmena, brisanje
    7-dodavanje
	8-predmeti*admin
    9-odeljenja*admin
  */

  public prevTest:number = 0;

  public changeView(arg:number){
    if(arg == 10)
    {
     if(this.userRang==2)
     {
      this.showTest[this.prevTest] = false;
      this.prevTest = 5;
      this.showTest[this.prevTest] = true;
     } 
     else if (this.userRang==1 || this.userRang==0)
     {
      this.showTest[this.prevTest] = false;
      this.prevTest = 3;
      this.showTest[this.prevTest] = true;
     }
    }
    else
    {
      this.showTest[this.prevTest] = false;
      this.prevTest = arg;
      this.showTest[this.prevTest] = true;
    }
  }
}
