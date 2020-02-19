import { Component, OnInit, Inject } from '@angular/core';
import { ForumComponent } from '../forum/forum.component';
import { MatDialog } from '@angular/material';
import { ForumService } from '../../Services/forum.service';
import { DialogThreadAnswerComponent } from '../dialog-thread-answer/dialog-thread-answer.component';

@Component({
  selector: 'app-forum-thread-view',
  templateUrl: './forum-thread-view.component.html',
  styleUrls: ['./forum-thread-view.component.css']
})
export class ForumThreadViewComponent implements OnInit {

  constructor(@Inject(ForumComponent) private parent:ForumComponent, public dialog: MatDialog,
                                    private srvc:ForumService) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogThreadAnswerComponent, {
      height: '350px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("Dijalog vratio: " + result);
        let obj = {
          autor : "5b78509794045e6e02b417a9",
          tekst : result,
          forumPost : this.parent.selectedThemeId,
          datumPostavljanja : new Date().toLocaleString()
          }
          this.srvc.postForumOdgovor(obj);
          this.srvc.updateAnswerNumber(this.parent.selectedThemeId, 1).subscribe();
      }
    });
    this.refresh();
  }

  public deleteObavestenjeOdgovor(arg){
    this.srvc.deleteForumAnswerById(arg, 0);
    this.srvc.updateAnswerNumber(this.parent.selectedThemeId, 0).subscribe();
  }

  public refresh(){
    this.ngOnInit();
    this.parent.showForum = 0;
    this.parent.showForum = 1;
  }

  public back(){
    this.parent.showForum = 0;
    this.parent.ngOnInit();
  }

  public izabranaTema;

  public odgovori;

  ngOnInit() {
    var indxTeme = this.parent.teme.findIndex(k => k['_id']==this.parent.selectedThemeId);
    console.log(indxTeme);
    this.izabranaTema = this.parent.teme[indxTeme];
    this.srvc.getForumOdgovorById(this.parent.selectedThemeId).subscribe(data=>this.odgovori=data);
  }

}
