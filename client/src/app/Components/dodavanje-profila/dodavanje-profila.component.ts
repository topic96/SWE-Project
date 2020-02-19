import { Component, OnInit, Inject } from '@angular/core';
import { DesnaStranaComponentComponent } from '../desna-strana-component/desna-strana-component.component';
import { MatDialog } from '@angular/material';
import { DijalogNoviDjakComponent } from '../dijalog-novi-djak/dijalog-novi-djak.component';
import { DijalogNoviRoditeljComponent } from '../dijalog-novi-roditelj/dijalog-novi-roditelj.component';
import { DijalogNoviProfesorComponent } from '../dijalog-novi-profesor/dijalog-novi-profesor.component';
import { ProfilService } from '../../services/profil.service';
import { OdeljenjeService } from '../../services/odeljenje.service';
import { PredmetService } from '../../services/predmet.service';

@Component({
  selector: 'app-dodavanje-profila',
  templateUrl: './dodavanje-profila.component.html',
  styleUrls: ['./dodavanje-profila.component.css']
})
export class DodavanjeProfilaComponent implements OnInit {

  constructor(public dialog: MatDialog,
              @Inject(DesnaStranaComponentComponent) private parent:DesnaStranaComponentComponent, public _profilSevice :ProfilService, public _odeljenjeService : OdeljenjeService, public _predmetService : PredmetService) { }
  public deca=[];
  public odeljenja=[];
  public predmeti=[];
  public korIme:string ;
  public lozinka:string;
  public lozinka2:string;
  public ime:string;
  public prezime:string;
  public adresa:string;
  public datRodj:Date;
  public rang;
  public createErrorText:boolean = false;
//----
  public rad1:boolean=false;
  public rad2:boolean=false;
  public rad3:boolean=false;
  public rad4:boolean=false;

  public radioBool(arg:number){
    if(arg===0){
        this.rad2=false;
        this.rad3=false;
        this.rad4=false;
        this.rad1=true;
    }
    else if(arg===1)
    {
        this.rad2=true;
        this.rad3=false;
        this.rad4=false;
        this.rad1=false;
    }
    else if(arg===2){
        this.rad2=false;
        this.rad3=true;
        this.rad4=false;
        this.rad1=false;
    }
    else if(arg===3){
        this.rad2=false;
        this.rad3=false;
        this.rad4=true;
        this.rad1=false;
    }
    this.rang = arg;
  }

  /* Proverava da li su sva polja popunjena */
  public checkInputStatus() : boolean{
    console.log(this.korIme);
    console.log(this.lozinka);
    console.log(this.lozinka2);
    console.log(this.ime);
    console.log(this.prezime);
    console.log(this.adresa);
    console.log(this.datRodj);
    console.log(this.rang);
    if (this.korIme!='' && this.lozinka!='' && this.lozinka2!=''
        && this.ime!='' && this.prezime!='' && this.adresa!='' && this.datRodj!= null){
          if (this.lozinka === this.lozinka2)
          {
            if(this.rad1 || this.rad2 || this.rad3 || this.rad4){
              return true;
            }
            else{
              return false;
            }
          }
          else{
            return false;
          }
        }
      else{
        return false;
      }
  }

openDialog(): void {
  interface Ob{
    [key: string]: any,
  };
  var ob:Ob=
        {
          ime:
          {
            licnoIme:this.ime,
            prezime:this.prezime
          },
          userName:this.korIme,
          password:this.lozinka,
          adresaStanovanja:{ulica:this.adresa},
          datumRodjenja:this.datRodj,
          e_mail:this.korIme+"@gmail.com"
          //odeljenje:""
        };
  if(this.rad1==true)
  {
    //this._profilSevice.postUcenik(ob).subscribe();
  }
  else if (this.rad2==true)
  {
    //this._profilSevice.postRoditelj(ob).subscribe();
  }
  else if (this.rad3==true)
  {
    //this._profilSevice.postProfesor(ob).subscribe();
  }
  else if (this.rad4==true)
  {
    this._profilSevice.postAdministrator(ob).subscribe();
  }
  if(!this.checkInputStatus()){
    this.createErrorText = true;
  }
  else{
    if(this.rad1 == true){
      console.log("uso prvi");
      const dialogRef = this.dialog.open(DijalogNoviDjakComponent, {
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if(result){
          console.log("Id izabranog odeljenja: " + result['_id']);
          ob['odeljenje']=result['_id'];
          this._profilSevice.postUcenik(ob).subscribe();//Dete servise
        }
        this.parent.parent.changeView(0);
      });
    }
    else if (this.rad2 == true){
      console.log("uso drugi");
      console.log(this.deca);
      const dialogRef = this.dialog.open(DijalogNoviRoditeljComponent, {
        width: '500px',
        data:{niz:this.deca}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if(result){
          console.log("Izabrano/a dete/a: " + result);//u rezult su deca
          ob.deca=result;
          this._profilSevice.postRoditelj(ob).subscribe();//roditelj servis
        }
        this.parent.parent.changeView(0);
      });
    }
    else if(this.rad3 == true){
      console.log("uso treci");
      const dialogRef = this.dialog.open(DijalogNoviProfesorComponent, {
        width: '500px',
        height: '500px',
        data:{niz:this.odeljenja, predmeti:this.predmeti}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          ob.odeljenja=result.idOdeljenjaPredaje;
          ob.predmet=result.idPredmeta;
          ob.razredniStaresina=result.idOdeljenjaRazredni;
          this._profilSevice.postProfesor(ob).subscribe(data=>
            {
              if(result.idOdeljenjaRazredni!="")
              {
                var obj={razredniStaresina:data};
                this._odeljenjeService.putOdeljenje(obj, result.idOdeljenjaRazredni).subscribe();
              }
            });//Profesor srevis

        }
        this.parent.parent.changeView(0);
      });
    }
    else{
      this.parent.parent.changeView(0);
    }
  }
}

  public reset(){
    this.korIme = '';
    this.lozinka = '';
    this.lozinka2 = '';
    this.ime = '';
    this.prezime = '';
    this.adresa = '';
    this.datRodj = null;
  }

  ngOnInit() {
    this._profilSevice.getUcenikNoId().subscribe(data=>this.deca=data);
    this._odeljenjeService.getOdeljenje().subscribe(data=>this.odeljenja=data);
    this._predmetService.getPredmeti().subscribe(data=>this.predmeti=data);
  }

}