import { Component, OnInit, Inject } from '@angular/core';
import { PIBAdminComponent } from '../pibadmin/pibadmin.component';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-change-admin-profile-admin',
  templateUrl: './change-admin-profile-admin.component.html',
  styleUrls: ['./change-admin-profile-admin.component.css']
})
export class ChangeAdminProfileAdminComponent implements OnInit {

  constructor(@Inject(PIBAdminComponent) private parent:PIBAdminComponent,public _profilService : ProfilService) { }

  public profileData = this.parent.ELEMENT_DATA[this.parent.selectedStudentIndex];

  ngOnInit() {
  }

  public editData(){
    this.parent.viewP = false;
  }

  public saveData(){

    var ob={"ime":this.profileData.ime,"userName":this.profileData.userName, "adresaStanovanja":this.profileData.adresaStanovanja};
    this._profilService.putAdministrator(this.profileData._id, ob).subscribe();
    this.parent.viewP = false;
  }
}
