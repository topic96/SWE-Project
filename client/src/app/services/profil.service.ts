import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IProfesor
{
  _id:String;
  ime:String,
  adresaStanovanja:String,
  JMBG: String,
  datumRodjenja: String,
  mestoStanovanja : String,
  userName: String,
  password: String,
  pol:String,
  strucnaSprema:String,
  razredniStaresina:String,
  odeljenja:String
}
export interface IUcenik
{
  _id:String;
  ime: String,
  JMBG: String,
  indexUcenika: String,
  datumRodjenja: String,
  adresaStanovanja: String,
  roditelj: String,
  mestoStanovanja: String,
  userName: String,
  pol: String,
  neopravdaniCasovi: String,
  opravdaniCasovi: String,
  odeljenje:String
}

export interface IRoditelj
{
  _id:String;
  ime: String,
  JMBG: String,
  datumRodjenja: String,
  adresaStanovanja: String,
  mestoStanovanja: String,
  e_mail: String,
  userName: String,
  pol: String,
  deca:String
}

export interface IAdministrator
{
  _id:String;
  ime: String,
  JMBG: String,
  datumRodjenja: String,
  adresaStanovanja: String,
  mestoStanovanja: String,
  e_mail: String,
  userName: String,
  password: String,
  pol: String
}

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private _urlP : string = "http://localhost:3000/users/profesor";
  private _urlU : string = "http://localhost:3000/users/ucenik";
  private _urlR : string = "http://localhost:3000/users/roditelj";
  private _urlA : string = "http://localhost:3000/users/administrator";


  constructor(private http:HttpClient) {}

    /********************************************* 
    *******************Profesor******************/
    /********************************************/
    getProfesor(id:String) : Observable<IProfesor>
    {
      return this.http.get<IProfesor>(this._urlP+"/"+id);
    }
    getProfesorNoId(): Observable<IProfesor[]>
    {
      return this.http.get<IProfesor[]>(this._urlP);
    }
    putProfesor(id,body) : Observable<IProfesor>
    {
      return this.http.put<IProfesor>(this._urlP+"/"+id, body );
    }  
    postProfesor(body) : Observable<IProfesor>
    {
      return this.http.post<IProfesor>(this._urlP, body);
    }
    deleteProfesor(index): Observable<IProfesor>
    {
      return this.http.delete<IProfesor>(this._urlP+"/"+index);
    }
    /********************************************* 
    ********************Ucenik*******************/
    /********************************************/
    getUcenikNoId():Observable<IUcenik[]>
    {
      return this.http.get<IUcenik[]>(this._urlU);
    }
    getUcenik(id:String) : Observable<IUcenik>
    {
      return this.http.get<IUcenik>(this._urlU+"/"+id);
    }
    putUcenik(id,body) : Observable<IUcenik>
    {
      return this.http.put<IUcenik>(this._urlU+"/"+id, body );
    } 
    postUcenik(body) : Observable<IUcenik>
    {
      return this.http.post<IUcenik>(this._urlU, body);
    }
    deleteUcenik(index): Observable<IUcenik>
    {
      return this.http.delete<IUcenik>(this._urlU+"/"+index);
    }

    /********************************************* 
    *******************Roditelj******************/
    /********************************************/
    getRoditelj(id:String) : Observable<IRoditelj>
    {
      return this.http.get<IRoditelj>(this._urlR+"/"+id);
    }
    getRoditeljNoId() : Observable<IRoditelj[]>
    {
      return this.http.get<IRoditelj[]>(this._urlR);
    }
    putRoditelj(id,body) : Observable<IRoditelj>
    {
      return this.http.put<IRoditelj>(this._urlR+"/"+id, body );
    } 
    postRoditelj(body) : Observable<IRoditelj>
    {
      return this.http.post<IRoditelj>(this._urlR, body);
    }
    deleteRoditelj(index): Observable<IRoditelj>
    {
      return this.http.delete<IRoditelj>(this._urlR+"/"+index);
    }

    /********************************************* 
    ****************Administrator****************/
    /********************************************/
    getAdministrator(id:String) : Observable<IAdministrator>
    {
      return this.http.get<IAdministrator>(this._urlA+"/"+id);
    }
    getAdministratorNoId():Observable<IAdministrator[]>
    {
      return this.http.get<IAdministrator[]>(this._urlA);
    }
    putAdministrator(id,body) : Observable<IAdministrator>
    {
      return this.http.put<IAdministrator>(this._urlA+"/"+id, body );
    } 
    postAdministrator(body) : Observable<IAdministrator>
    {
      return this.http.post<IAdministrator>(this._urlA, body);
    }
    deleteAdministrator(index): Observable<IAdministrator>
    {
      return this.http.delete<IAdministrator>(this._urlA+"/"+index);
    }
}
