import { Component, OnInit, Inject } from '@angular/core';
import { PIBStudentComponent } from '../pibstudent/pibstudent.component';
import { OdeljenjeService } from '../../services/odeljenje.service';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-change-student-profile-admin',
  templateUrl: './change-student-profile-admin.component.html',
  styleUrls: ['./change-student-profile-admin.component.css']
})
export class ChangeStudentProfileAdminComponent implements OnInit {

  constructor(@Inject(PIBStudentComponent) private parent:PIBStudentComponent, public _odeljenjeService : OdeljenjeService, public _profilService:ProfilService) { }

  public profileData;
  public ucenikId=this.parent.selectedStudentId;
  public odeljenje;
  public odeljenja=[];

  ngOnInit() 
  {
    this._odeljenjeService.getOdeljenje().subscribe(data=>this.odeljenja=data);
    this._profilService.getUcenik(""+this.ucenikId).subscribe(data=>this.profileData=data);
    this.odeljenje=this.profileData.odeljenje._id;

  }

  public editData(){

    this.parent.viewP = false;
  }
  public putData()
  {
    this.profileData.odeljenje._id=this.odeljenje;
    this._profilService.putUcenik(this.ucenikId,this.profileData).subscribe();
    console.log(this.profileData);
    this.parent.viewP = false;
  }

}
