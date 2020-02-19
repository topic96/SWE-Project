import { Component, OnInit, Inject } from '@angular/core';
import { ListaUcenikaComponent } from '../lista-ucenika/lista-ucenika.component';
import { MatDialog } from '@angular/material';
import { NovaOcenaProfesorComponent } from '../nova-ocena-profesor/nova-ocena-profesor.component';
import{ NovaNapomenaProfesorComponent } from '../nova-napomena-profesor/nova-napomena-profesor.component';

@Component({
  selector: 'app-profesor-upis-ocene-napomene-izostanka',
  templateUrl: './profesor-upis-ocene-napomene-izostanka.component.html',
  styleUrls: ['./profesor-upis-ocene-napomene-izostanka.component.css']
})
export class ProfesorUpisOceneNapomeneIzostankaComponent implements OnInit {

  constructor(@Inject(ListaUcenikaComponent) private parent:ListaUcenikaComponent,
  public dialog: MatDialog) { }

  public back(){
    this.parent.showStudent=false;
  }

  openDialogOcena(): void {
    const dialogRef = this.dialog.open(NovaOcenaProfesorComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
      console.log('Upisana ocena: ' + result); //result se ovde moze koristiti da se izvuce upisana oecna
      }
    });
  }

  openDialogNapomena(): void {
    const dialogRef = this.dialog.open(NovaNapomenaProfesorComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
      console.log('Upisan razlog: ' + result['razlog']); //result se koristi za dobijanje razloga napomene i datuma
      console.log('Upisan razlog(datum): ' + result['datum']);
      }
    });
  }

  public izabranDjak =
  {
    id: "0",
    ime: "Radomir",
    prezime: "Raskovic",
    odeljenje: "IV3"
  }

  ngOnInit() {
  }

}
