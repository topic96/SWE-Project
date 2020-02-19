import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-thread-answer',
  templateUrl: './dialog-thread-answer.component.html',
  styleUrls: ['./dialog-thread-answer.component.css']
})
export class DialogThreadAnswerComponent implements OnInit {

  constructor(public DialogRef: MatDialogRef<DialogThreadAnswerComponent>) { }

  public odgovor = "";
  public cancel() {
    this.DialogRef.close();
  }

  public answer() {
    this.DialogRef.close(this.odgovor);
  }

  ngOnInit() {
  }

}
