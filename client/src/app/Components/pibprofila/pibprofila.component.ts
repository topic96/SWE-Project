import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-pibprofila',
  templateUrl: './pibprofila.component.html',
  styleUrls: ['./pibprofila.component.css']
})
export class PIBProfilaComponent implements OnInit {

  constructor(public _profilService : ProfilService) { }

  public show:boolean = true;
  public showS:boolean = false;
  public showP:boolean = false;
  public showT:boolean = false;
  public showA:boolean = false;
  public dataAdmin =[];
  public dataUcenik=[];
  public dataProfesor=[];
  public dataRoditelj=[];

  /* Retrieved from db(not implemented) */
  public dataFromDBd = [
    {

    }
  ]

  ngOnInit() {
    this._profilService.getAdministratorNoId().subscribe(data=>this.dataAdmin=data);
    this._profilService.getProfesorNoId().subscribe(data=>this.dataProfesor=data);
    this._profilService.getRoditeljNoId().subscribe(data=>this.dataRoditelj=data);
    this._profilService.getUcenikNoId().subscribe(data=>this.dataUcenik=data);
  }

  public getStudent(){
    this.show = false;
    this.showS = true;
  }

  public notStudent(){
    this.show = true;
    this.showS = false;
  }

  public getParent(){
    this.show = false;
    this.showP = true;
  }

  public notParent(){
    this.show = true;
    this.showP = false;
  }

  public getTeacher(){
    this.show = false;
    this.showT = true;
  }

  public notTeacher(){
    this.show = true;
    this.showT = false;
  }

  public getAdmin(){
    this.show = false;
    this.showA = true;
  }

  public notAdmin(){
    this.show = true;
    this.showA = false;
  }

}
