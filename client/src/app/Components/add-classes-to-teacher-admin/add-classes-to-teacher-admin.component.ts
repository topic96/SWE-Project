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
  selector: 'app-add-classes-to-teacher-admin',
  templateUrl: './add-classes-to-teacher-admin.component.html',
  styleUrls: ['./add-classes-to-teacher-admin.component.css']
})
export class AddClassesToTeacherAdminComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddClassesToTeacherAdminComponent>) { }

  selectedData= [];

  ngOnInit() {
  }

  displayedColumns: string[] = ['select', 'ime', 'brojDjaka', 'razredni'];
  dataSource = new MatTableDataSource<Object>(ELEMENT_DATA);
  selection = new SelectionModel<Object>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));

  }

  public select(arg:number){
    if (this.selectedData.length === 0){
      this.selectedData.push(ELEMENT_DATA[arg]);
    }
    else{
      if (this.selectedData.includes(ELEMENT_DATA[arg])){
        let i = this.selectedData.indexOf(ELEMENT_DATA[arg]);
        this.selectedData.splice(i, 1);
      }
      else{
        this.selectedData.push(ELEMENT_DATA[arg]);
      }
    }
    console.log(this.selectedData);
  }

  public cancel(){
    this.dialogRef.close();
  }

  public save(){
    this.dialogRef.close(this.selectedData);
  }

}
