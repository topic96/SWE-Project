import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPredmet{
  naziv: string,
  opis: string
}

@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  constructor(private http:HttpClient) { }

  private _url : string="http://localhost:3000/users/predmet";

  getPredmeti() : Observable<IPredmet[]>{
    return this.http.get<IPredmet[]>(this._url);
  }

  postPredmeti(Ob) 
  {
    this.http.post<IPredmet>(this._url, Ob)
    .subscribe(
      data => {
          console.log("POST Request is successful ");
      },
      error => {
          console.log("Error");
      }
    );
  }

  deletePredmetById(id){
    return this.http.delete<IPredmet>(this._url + '/' + id,{
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":  "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Method":  "DELETE",
        "Content-Type": "application/json charset=UTF-8"
      }
    })
    .subscribe(
      data => {
          console.log("DELETE Request is successful ");
      },
      error => {
          console.log(error);
      }
    );
  }
}