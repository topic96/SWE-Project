import { Component, OnInit, Inject } from '@angular/core';
import { ProfileViewComponent } from '../profile-view/profile-view.component';

@Component({
  selector: 'app-izmena-profila-user',
  templateUrl: './izmena-profila-user.component.html',
  styleUrls: ['./izmena-profila-user.component.css']
})
export class IzmenaProfilaUserComponent implements OnInit {

  constructor(@Inject(ProfileViewComponent) private parent:ProfileViewComponent) { }

  public ime:String=this.parent.profileData.ime.licnoIme;
  public prezime:String=this.parent.profileData.ime.prezime;
  public adresa:String=this.parent.profileData.adresaStanovanja.ulica;

  public back(){
    this.parent.editTest = false;
  }
  public submit()
  {
    var pr={ime:{licnoIme:this.ime, prezime:this.prezime}, adresaStanovanja:{ulica:this.adresa}};
    this.parent.putProfil(pr);
    this.parent.editTest = false;

    // TODO: pozovi servis
  }
  ngOnInit() {
  }

}
