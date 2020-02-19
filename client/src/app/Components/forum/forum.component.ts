import { Component, OnInit, Inject } from '@angular/core';
import { ForumService } from '../../Services/forum.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  panelOpenState = false;
  showForum = 0;
  selectedThemeId;

  public newThread(){
    this.showForum=2;
  }

  private id = this.parent.userId;

  constructor(private srvc:ForumService, @Inject(AppComponent) public parent:AppComponent) { }
  public teme = [];

  public biraj(arg){ //funkcija ima id teme sa foruma, 
    console.log(arg); 
    this.selectedThemeId = arg;
    //console.log(this.teme);      //sve sto treba je da prikaze tu temu sa njenim odgovorima
    this.showForum = 1;     //javice gresku mozda oko id-a
  }

  public obirisiObavestenje(arg){
    console.log("Usao u fju za brisanje...");
    this.srvc.deleteForumAnswerById(arg, 1);
    this.srvc.deleteForumByID(arg);
  }

  ngOnInit() {
    this.srvc.getForum().subscribe(data=>this.teme=data);
  }

}
