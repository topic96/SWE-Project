import { Component, OnInit, inject, Inject } from '@angular/core';
import {MatTableDataSource, MAT_DIALOG_DATA} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dijalog-novi-roditelj',
  templateUrl: './dijalog-novi-roditelj.component.html',
  styleUrls: ['./dijalog-novi-roditelj.component.css']
})
export class DijalogNoviRoditeljComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DijalogNoviRoditeljComponent>) {
    //this._profilService.getUcenikNoId().subscribe(data=>ELEMENT_DATA=data);
    //this.dataSource =ELEMENT_DATA;// new MatTableDataSource<Object>(ELEMENT_DATA);
    console.log(this.data);
  }
  public dataSource=this.data.niz;
  public selectedData = [];
  private displayedColumns = ['select', 'ime.licnoIme', 'ime.prezime', 'odeljenje'];
  //private dataSource;
  private selection;

  ngOnInit() {

    this.selection = new SelectionModel<Object>(true, []);
  }

  public back(){
    this.dialogRef.close();
    console.log(this.data.niz);
  }

  public select(){
    this.dialogRef.close(this.selectedData);
    console.log(this.data.niz);
    
  }



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;//dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        //dataSource.data.forEach(row => this.selection.select(row));
        this.dataSource.forEach(row => this.selection.select(row));
  }

  public getData(arg:number){
    console.log("Izabran id: " + arg);
    if(this.selectedData.includes(this.data.niz[arg]._id)){
      var index = this.selectedData.indexOf(this.data.niz[arg]._id);
      this.selectedData.splice(index, 1);
    }
    else{
      this.selectedData.push(this.data.niz[arg]._id);
    }

    console.log(this.selectedData);
  }

}
