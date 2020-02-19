import { Component, OnInit, Inject } from '@angular/core';
import { ForumComponent } from '../forum/forum.component';
import { ForumService } from '../../Services/forum.service';

@Component({
  selector: 'app-new-forum-thread',
  templateUrl: './new-forum-thread.component.html',
  styleUrls: ['./new-forum-thread.component.css']
})
export class NewForumThreadComponent implements OnInit {

  constructor(@Inject(ForumComponent) private parent:ForumComponent, private srvc:ForumService) { }

  public tema = "";
  public textTeme = "";

  public back() {
    this.parent.showForum = 0;
  }

  public post() {
    //this.parent.showForum = 0; //implementirati metodu za cuvanje nove teme na forumu

    let obj = {
    autor : "5b78509794045e6e02b417a9",
    tekst : this.textTeme,
    tema : this.tema,
    brojOdgovora : 0,
    datumPostavljanja : new Date().toLocaleString()
    }

    this.srvc.postForum(obj);

    this.parent.showForum = 0;
  }

  ngOnInit() {
  }

}
