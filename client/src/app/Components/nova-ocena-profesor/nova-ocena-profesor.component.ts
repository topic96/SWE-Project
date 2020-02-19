import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-nova-ocena-profesor',
  templateUrl: './nova-ocena-profesor.component.html',
  styleUrls: ['./nova-ocena-profesor.component.css']
})

export class NovaOcenaProfesorComponent implements OnInit {

  constructor(public DialogRef: MatDialogRef<NovaOcenaProfesorComponent>) {
   }

   public ocenaZaUpis:string= '';

   public odaberiOcenu(arg:string){
     this.ocenaZaUpis = arg;
   }

   public cancel(){
     this.DialogRef.close();
   }

   public upisi(){
     this.DialogRef.close(this.ocenaZaUpis);
   }

  ngOnInit() {
  }

}
