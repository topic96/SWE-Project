import { Component, OnInit, Inject } from '@angular/core';
import { ListaOdeljenjaComponent } from '../lista-odeljenja/lista-odeljenja.component';
import { MatDialog } from '@angular/material';
import { NoviIzostanakProfesorComponent } from '../novi-izostanak-profesor/novi-izostanak-profesor.component';

@Component({
  selector: 'app-lista-ucenika',
  templateUrl: './lista-ucenika.component.html',
  styleUrls: ['./lista-ucenika.component.css']
})
export class ListaUcenikaComponent implements OnInit {

  constructor(@Inject(ListaOdeljenjaComponent) private parent:ListaOdeljenjaComponent,
  public dialog: MatDialog) { }

  public back(){
    this.parent.showOdeljenje = false;
  }

  izostanci(): void {
    const dialogRef = this.dialog.open(NoviIzostanakProfesorComponent, {
      width: '500px',
      data: this.djaci
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
      console.log('Upisani ucenici: ' + result); //result se ovde koristi da se izvuku id-evi ucenika kojima ce biti upisani izostanci
      }
    });
  }

  public showStudent:boolean = false;

  public selectStudent(arg:number){
    //arg predstavlja id ucenika kome treba da se upise ocena/napomena/izostanak
    console.log("Id izabranog djaka:" + arg);
    this.showStudent = true;
  }

  djaci = [
    {
      id: "0",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "1",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "2",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "3",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "4",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "5",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "6",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "7",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "8",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "9",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "10",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "11",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "12",
      ime: "Radomir",
      prezime: "Raskovic"
    }
  ]

  ngOnInit() {
  }

}
