import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PIBProfilaComponent } from '../pibprofila/pibprofila.component';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-pibteacher',
  templateUrl: './pibteacher.component.html',
  styleUrls: ['./pibteacher.component.css']
})
export class PIBTeacherComponent implements OnInit {

  constructor(@Inject(PIBProfilaComponent) private parent:PIBProfilaComponent,  public _profilService: ProfilService) { }
  public ELEMENT_DATA=this.parent.dataProfesor;
  public checkNumbr = [];
  public selectedStudentId:number;
  public viewP:boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['Ime', 'Prezime', 'Predmet', 'check'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  public empty(arg:number){
    console.log("Cheat..." + arg);
    let b = <HTMLButtonElement>document.getElementById('dltBtn');
    if(this.checkNumbr.includes(arg)){
      var i = this.checkNumbr.indexOf(arg);
      this.checkNumbr.splice(i, 1);
      if (this.checkNumbr.length === 0){
        b.disabled = true;
      }
    }
    else{
      this.checkNumbr.push(arg);
      b.disabled = false;
    }
    console.log(this.checkNumbr);
  }

  public selectStudent(arg:number){
    this.selectedStudentId = arg;
    console.log("Izabran id djaka: " + this.selectedStudentId);
    this.viewP = true;
  }

  public delete(){
    this.checkNumbr.forEach(element => {
      this._profilService.deleteProfesor(element).subscribe();
    });
    console.log("Obrisani nalozi sa id-em: " + this.checkNumbr);
    this.parent.notTeacher();
  }

  public back(){
    this.parent.notTeacher();
  }


}
