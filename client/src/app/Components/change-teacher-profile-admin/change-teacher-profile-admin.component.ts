import { Component, OnInit, Inject } from '@angular/core';
import { PIBTeacherComponent } from '../pibteacher/pibteacher.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddClassesToTeacherAdminComponent } from '../add-classes-to-teacher-admin/add-classes-to-teacher-admin.component';
import { AddMainClassToTeacherAdminComponent } from '../add-main-class-to-teacher-admin/add-main-class-to-teacher-admin.component';

@Component({
  selector: 'app-change-teacher-profile-admin',
  templateUrl: './change-teacher-profile-admin.component.html',
  styleUrls: ['./change-teacher-profile-admin.component.css']
})
export class ChangeTeacherProfileAdminComponent implements OnInit {

  constructor(@Inject(PIBTeacherComponent) private parent:PIBTeacherComponent,
  public dialog: MatDialog) { }

  public profileData = {
    Username: "Vlaxy",
    Ime: "Vlajko",
    Prezime: "Vlajkovic",
    Adresa: "Ne znam di sam 12",
    DatRodj:Date,
    Predmet: 'Matematika',
    predaje: [
      {
        id: 0,
        broj: 'I1'
      },
      {
        id: 1,
        broj: 'III4'
      },
      {
        id: 2,
        broj: 'II2'
      },
      {
        id: 3,
        broj: 'III2'
      }
    ],
    razredni: {id: 1, broj: 'III4'}
  }

  ngOnInit() {
  }

  public editData(){
    this.parent.viewP = false;
  }

  public delete(arg:number){
    let i:number;
    for (let index = 0; index < this.profileData.predaje.length; index++) {
      if(this.profileData.predaje[index].id === arg){
        i = index;
      }
    }
    this.profileData.predaje.splice(i, 1);
    if(this.profileData.predaje.length === 0){
      this.profileData.predaje = null;
    }
  }

  public deleteMain(){
    this.profileData.razredni = null;
  }

  addClass(): void {
    const dialogRef = this.dialog.open(AddClassesToTeacherAdminComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        console.log("Dodata odeljenja: " + result);
      }
    });
  }

  addMainClass(): void {
    const dialogRef = this.dialog.open(AddMainClassToTeacherAdminComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        console.log("Dodata odeljenja: " + result);
        this.profileData.razredni.id = result['id'];
        this.profileData.razredni.broj = result['ime'];
      }
    });
  }

}
