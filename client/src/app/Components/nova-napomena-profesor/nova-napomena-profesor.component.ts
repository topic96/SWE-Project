import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-nova-napomena-profesor',
  templateUrl: './nova-napomena-profesor.component.html',
  styleUrls: ['./nova-napomena-profesor.component.css']
})
export class NovaNapomenaProfesorComponent implements OnInit {

  constructor(public DialogRef: MatDialogRef<NovaNapomenaProfesorComponent>) { }

  izabranRazlog = {
    razlog: '',
    datum: ''
  }

  public back(){
    this.DialogRef.close();
  }

  public napisiNapomenu(){
    this.DialogRef.close(this.izabranRazlog);
  }

  ngOnInit() {
  }

}
