import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.css']
})
export class LogInComponentComponent implements OnInit {
  constructor(@Inject(AppComponent) private parent:AppComponent) {
  }

  public usrName = '';
  public paswr = '';
  public rang:number;
  public logInFailed:boolean = false;

  ngOnInit() {
  }

  public logInClick(){
    if (this.usrName === '' || this.paswr === '' || this.rang == null){
      this.logInFailed = true;
    }
    else{
      this.logInFailed = false;
    }
    if (this.logInFailed === false){
      this.parent.logInTest = false;
      this.parent.userRang = this.rang;
      console.log(this.parent.userRang);
      console.log(this.usrName);
      console.log(this.paswr);
    }
  }

}
