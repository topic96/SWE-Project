import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IOdeljenje
{
  _id: String,
  naziv: String,
  brojUcenika: String,
  razredniStaresina: String
}

@Injectable({
  providedIn: 'root'
})

export class OdeljenjeService {

  private _url : string = "http://localhost:3000/users/odeljenje";

  constructor(private http: HttpClient) { }

  getOdeljenje(): Observable<IOdeljenje[]>
  {
    return this.http.get<IOdeljenje[]>(this._url);
  }
  putOdeljenje(ob, index):Observable<IOdeljenje>
  {
    ob.razredniStaresina=ob.razredniStaresina.createProfesor._id;
    return this.http.put<IOdeljenje>(this._url+"/"+index, ob);
  }
  putOdeljenjeGradski(ob, index):Observable<IOdeljenje>
  {
    return this.http.put<IOdeljenje>(this._url+"/"+index, ob);
  }
	deleteOdeljenjeById(id) {
	return this.http.delete<IOdeljenje>(this._url + '/' + id,{
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
