import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-novi-predmet-dialog',
  templateUrl: './novi-predmet-dialog.component.html',
  styleUrls: ['./novi-predmet-dialog.component.css']
})
export class NoviPredmetDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NoviPredmetDialogComponent>) { }

  public nazivPredmeta = '';
  public opisPredmeta = '';
  public showErr = false;

  public back(){
    this.dialogRef.close();
  }

  public save(){
    if(!this.nazivPredmeta || !this.opisPredmeta){
      this.showErr = true;
    }
    else{
      let obj = {
        naziv: this.nazivPredmeta,
        opis: this.opisPredmeta
      }
      this.dialogRef.close(obj);
    }
  }

  ngOnInit() {
  }

}
