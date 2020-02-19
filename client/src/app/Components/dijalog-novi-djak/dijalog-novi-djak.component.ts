import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { OdeljenjeService } from '../../services/odeljenje.service';

@Component({
  selector: 'app-dijalog-novi-djak',
  templateUrl: './dijalog-novi-djak.component.html',
  styleUrls: ['./dijalog-novi-djak.component.css']
})
export class DijalogNoviDjakComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DijalogNoviDjakComponent>, public _odeljenjaService : OdeljenjeService  ) { }

  public data_object:object = {
    _id: ''
  }

  public cancel(){
    this.dialogRef.close();
    console.log(this.godine);
  }

  public fillData(arg:string){
    this.data_object['_id'] = arg;
  }

  public choose(){
    this.dialogRef.close(this.data_object); //iskoristiti ovu funkciju da bi se vratili 
                                                  //podaci o izabranom odeljenju
    //na klik na div koji sadrzi odeljenje upisati u promenjivu njene podatke(id i broj)
    //i ispisati u labeli da bi se znalo sta je izabrano
    //te podatke vracati iz dijaloga 
  }
  
  public godine= [];

  ngOnInit() {
    this._odeljenjaService.getOdeljenje().subscribe(data=>this.godine=data);
  }

}
