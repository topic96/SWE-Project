import { Component, OnInit, Inject } from '@angular/core';
import { DesnaStranaComponentComponent } from '../desna-strana-component/desna-strana-component.component';
import { ObavestenjeService } from '../../services/obavestenje.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obavestenje-component',
  templateUrl: './obavestenje-component.component.html',
  styleUrls: ['./obavestenje-component.component.css']
})
export class ObavestenjeComponentComponent implements OnInit {

  constructor(@Inject(DesnaStranaComponentComponent) private parent:DesnaStranaComponentComponent, private _obavestenjaService : ObavestenjeService) { }
  public novoObavestenjeTest:boolean = false;
  public rang:number = this.parent.rang;
  public tema :String= "";
  public textTeme : string= "";
  public novoObavestenje(){
    this.novoObavestenjeTest = !this.novoObavestenjeTest;
    if (!this.novoObavestenjeTest)
    {
      var date=new Date().toLocaleDateString();
      var temce=this.tema;
      var ob={bodyObavestenje:this.textTeme, nazivObavestenja:temce, datumPostavljanja: date, ProfObavestava: "5b21a20c69e7fc161cf10a1c" };
      this._obavestenjaService.postObavestenja(ob).subscribe();
    }
  }
  public obavestenjaList=[]; 
  ngOnInit() {
    this._obavestenjaService.getObavestenja().subscribe(data=>this.obavestenjaList=data);
  }

}
