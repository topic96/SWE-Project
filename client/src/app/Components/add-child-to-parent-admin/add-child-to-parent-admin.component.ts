import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-child-to-parent-admin',
  templateUrl: './add-child-to-parent-admin.component.html',
  styleUrls: ['./add-child-to-parent-admin.component.css']
})
export class AddChildToParentAdminComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddChildToParentAdminComponent>) { }

  public childrenList = [
    {
      id: 0,
      ime: "Dragan",
      prezime: "Jovic",
      odeljenje: "II2"
    },
    {
      id: 1,
      ime: "Dragan",
      prezime: "Jovic",
      odeljenje: "II2"
    },
    {
      id: 2,
      ime: "Sveta",
      prezime: "Jovic",
      odeljenje: "II2"
    },
    {
      id: 3,
      ime: "Alibaba",
      prezime: "Jovic",
      odeljenje: "II2"
    },
    {
      id: 4,
      ime: "Dragan",
      prezime: "Jovic",
      odeljenje: "II2"
    },
    {
      id: 5,
      ime: "Jovan",
      prezime: "Jovic",
      odeljenje: "II2"
    },
    {
      id: 6,
      ime: "Dragan",
      prezime: "Jovic",
      odeljenje: "II2"
    }
  ]

  public selected;

  ngOnInit() {
  }

  public cancel(){
    this.dialogRef.close();
  }

  public done(){
    this.dialogRef.close(this.selected);
  }

  public select(arg:object){
    this.selected = arg;
  }

}
