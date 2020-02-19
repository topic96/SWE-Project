import { Component, OnInit } from '@angular/core';
import { OdeljenjeService } from '../../Services/odeljenje.service';

@Component({
  selector: 'app-odeljenja-admin',
  templateUrl: './odeljenja-admin.component.html',
  styleUrls: ['./odeljenja-admin.component.css']
})
export class OdeljenjaAdminComponent implements OnInit {

  constructor(private srvc:OdeljenjeService) { }

  private selectedIds = [];

  public dataSource = [];

  public select(arg:number){
    if (!this.selectedIds.includes(arg)){
      this.selectedIds.push(arg);
    }
    else{
      let i = this.selectedIds.indexOf(arg);
      this.selectedIds.splice(i, 1);
    }
    let b = <HTMLButtonElement>document.getElementById("dltBtn");
    if (this.selectedIds.length>0){
      b.disabled = false;
    }
    else{
      b.disabled = true;
    }
  }

  public delete(){
    this.selectedIds.forEach(element => {
      this.srvc.deleteOdeljenjeById(element);
    });
  }

  displayedColumns: string[] = ['name', 'razredni', 'brDjaka', 'check'];

  ngOnInit() {
    this.srvc.getOdeljenje().subscribe(data=>this.dataSource=data);
  }

}
