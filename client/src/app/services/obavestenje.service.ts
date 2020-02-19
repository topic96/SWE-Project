import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IObavestenja{
  ProfObavestava:string,
  nazivObavestenja:string,
  bodyObavestenje: string,
  datumPostavljanja: string
}

@Injectable({
  providedIn: 'root'
})
export class ObavestenjeService {

  private _url : string="http://localhost:3000/users/obavestenje";

  constructor(private http:HttpClient) { }

  getObavestenja() : Observable<IObavestenja[]>
  {
    return this.http.get<IObavestenja[]>(this._url);
  }

  postObavestenja(Ob:any) : Observable<IObavestenja>
  {
    console.log(Ob);
    return this.http.post<IObavestenja>(this._url, Ob);
  }

  deleteObavestenja( index:number) : Observable<IObavestenja[]>
  {
    return this.http.delete<IObavestenja[]>(this._url+"/"+index);
  }

  putObavestenja(Ob:any,index:number):Observable<IObavestenja[]>
  {
    return this.http.put<IObavestenja[]>(this._url+"/"+index,Ob);
  }
}
