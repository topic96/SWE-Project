import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-dijalog-novi-profesor',
  templateUrl: './dijalog-novi-profesor.component.html',
  styleUrls: ['./dijalog-novi-profesor.component.css']
})
export class DijalogNoviProfesorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DijalogNoviProfesorComponent>) { }

  public selectedData:Object = {
    idPredmeta: '',
    idOdeljenjaRazredni: '',
    idOdeljenjaPredaje: []
  }

  public checked:boolean = false;

  ngOnInit() {
  }

  //ovde VALUE ustvari predstavlja id predmeta koji ce novi profesor
  //da predaje 
  public predmeti=this.data.predmet._id;

  public back(){
    this.dialogRef.close();
  }

  public checkC(){
    this.checked = !this.checked;
    if(this.checked){
      this.displayedColumns.push('radio');
    }
    else{
      this.selectedData['idOdeljenjaRazredni'] = '';
      this.displayedColumns.pop();
    }
    /*var elem = <HTMLDivElement>document.getElementById('dontHide');
    if (this.checked===true){
      elem.className = "notHiddenDiv";
    }
    else{
      elem.className = "hiddenDiv";
    }*/
  }

  public select(){
    this.dialogRef.close(this.selectedData);
  }

  displayedColumns: string[] = ['select', 'ime', 'razredni', 'brDjaka'];
  dataSource = this.data.niz;
  selection = new SelectionModel<Object>(true, []);

  public setChief(arg1:number, arg2){
    this.selectedData['idOdeljenjaRazredni']=this.data.niz[arg1]._id;
    if(this.selection.isSelected(arg2)){
      this.selection.deselect(arg2);
    }
    else{
      this.selection.select(arg2);
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  public getData(arg:number){
    console.log("Izabran id: " + arg);
    console.log("id predmeta"+this.data.predmet._id);
    if(this.selectedData['idOdeljenjaPredaje'].includes(this.data.niz[arg]._id)){
      var index = this.selectedData['idOdeljenjaPredaje'].indexOf(this.data.niz[arg]._id);
      this.selectedData['idOdeljenjaPredaje'].splice(index, 1);
    }
    else{
      this.selectedData['idOdeljenjaPredaje'].push(this.data.niz[arg]._id);
    }

    console.log(this.selectedData);
  }


}
