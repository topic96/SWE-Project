import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef } from '@angular/material';

const ELEMENT_DATA = [
  {id: 0, ime: 'I1', brojDjaka: 30, razredni: 'Ljiljana Cvijic'},
  {id: 1, ime: 'I2', brojDjaka: 30, razredni: 'Ljiljana Cvijic'},
  {id: 2, ime: 'I3', brojDjaka: 30, razredni: 'Ljiljana Cvijic'},
  {id: 3, ime: 'I4', brojDjaka: 30, razredni: 'Ljiljana Cvijic'},
  {id: 4, ime: 'II1', brojDjaka: 30, razredni: 'Ljiljana Cvijic'},
  {id: 5, ime: 'II2', brojDjaka: 30, razredni: 'Ljiljana Cvijic'},
  {id: 6, ime: 'II3', brojDjaka: 30, razredni: 'Ljiljana Cvijic'},
  {id: 7, ime: 'II4', brojDjaka: 30, razredni: 'Ljiljana Cvijic'},
  {id: 8, ime: 'III1', brojDjaka: 30, razredni: 'Ljiljana Cvijic'},
  {id: 9, ime: 'III2', brojDjaka: 30, razredni: 'Ljiljana Cvijic'},
];

@Component({
  selector: 'app-add-main-class-to-teacher-admin',
  templateUrl: './add-main-class-to-teacher-admin.component.html',
  styleUrls: ['./add-main-class-to-teacher-admin.component.css']
})
export class AddMainClassToTeacherAdminComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddMainClassToTeacherAdminComponent>) { }

  selectedData = {};

  displayedColumns: string[] = ['ime', 'brojDjaka', 'razredni'];
  dataSource = new MatTableDataSource<Object>(ELEMENT_DATA);
  selection = new SelectionModel<Object>(true, []);

  ngOnInit() {
  }

  public select(arg:number){
    this.selectedData = ELEMENT_DATA[arg];
    console.log(this.selectedData);
  }

  public cancel(){
    this.dialogRef.close();
  }

  public save(){
    this.dialogRef.close(this.selectedData);
  }

}
