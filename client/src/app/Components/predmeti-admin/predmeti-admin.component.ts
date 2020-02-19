import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { NoviPredmetDialogComponent } from '../novi-predmet-dialog/novi-predmet-dialog.component';
import { PredmetService } from '../../Services/predmet.service';

@Component({
  selector: 'app-predmeti-admin',
  templateUrl: './predmeti-admin.component.html',
  styleUrls: ['./predmeti-admin.component.css']
})
export class PredmetiAdminComponent implements OnInit {

  constructor(public dialog: MatDialog, private srvc:PredmetService) { }

  private selectedIds = [];

  public dataSource = [];

  public select(arg:number){
    if (!this.selectedIds.includes(arg)){
      this.selectedIds.push(arg);
    }
    else{
      let i = this.selectedIds.indexOf(arg);
      this.selectedIds.splice(i, 1);
    }
    let b = <HTMLButtonElement>document.getElementById("dltBtn");
    if (this.selectedIds.length>0){
      b.disabled = false;
    }
    else{
      b.disabled = true;
    }
  }

  public delete(){
    this.selectedIds.forEach(element => {
      this.srvc.deletePredmetById(element);
    });
  }

  public newPredmet(): void {
    const dialogRef = this.dialog.open(NoviPredmetDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
        this.srvc.postPredmeti(result);
      }
    });
  }

  displayedColumns: string[] = ['name', 'opis', 'check'];

  ngOnInit() {
    this.srvc.getPredmeti().subscribe(data=>this.dataSource=data);
  }

}
