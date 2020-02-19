import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-novi-izostanak-profesor',
  templateUrl: './novi-izostanak-profesor.component.html',
  styleUrls: ['./novi-izostanak-profesor.component.css']
})
export class NoviIzostanakProfesorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NoviIzostanakProfesorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object[]) { }

    public back(){
      this.dialogRef.close();
    }

    public add(arg:number){
      var test:boolean = false;
      this.izabraniDjaci.forEach(e => {
        if (e===arg)
          test = true;
      });
      if (!test){
        this.izabraniDjaci.push(arg);
      }
      else{
        var index = this.izabraniDjaci.indexOf(arg);
        this.izabraniDjaci.splice(index, 1);
      }
      console.log(this.izabraniDjaci);
    }

    izabraniDjaci:number[] = [];

    public upisi(){
      this.dialogRef.close(this.izabraniDjaci);
    }

  ngOnInit() {
  }

}
