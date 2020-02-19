import { Component, OnInit, Inject } from '@angular/core';
import { DesnaStranaComponentComponent } from '../desna-strana-component/desna-strana-component.component';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor(@Inject(DesnaStranaComponentComponent) private parent:DesnaStranaComponentComponent,public _profilSevice : ProfilService) { }
  public rang:number = this.parent.rang;
  public editTest:boolean = false;
  public profileData;
  ngOnInit() 
  {
    if(this.rang==0)
      this._profilSevice.getUcenik("5b799f8a3cf62cc6caff1576").subscribe(data=>this.profileData=data);
    else if(this.rang==1)
      this._profilSevice.getRoditelj("5b799e513cf62cc6caff14f6").subscribe(data=>this.profileData=data);
    else if(this.rang==2)
      this._profilSevice.getProfesor("5b21a18d69e7fc161cf10a1b").subscribe(data=>this.profileData=data);
    else if(this.rang==3)
      this._profilSevice.getAdministrator("5b7aea103cf62cc6caff1e62").subscribe(data=>this.profileData=data);

      console.log(this.profileData);
  }
  public putProfil(pr)
  { 
    if(this.rang==1)
      this._profilSevice.putRoditelj("5b799e513cf62cc6caff14f6",pr).subscribe();
    else if(this.rang==2)
      this._profilSevice.putProfesor("5b21a18d69e7fc161cf10a1b",pr).subscribe();
    else if(this.rang==3)
      this._profilSevice.putAdministrator("5b798e813cf62cc6caff0ecd",pr).subscribe();
  }
    public editData(){
    this.editTest = true;
  }
}
