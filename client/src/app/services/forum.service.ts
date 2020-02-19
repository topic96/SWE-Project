import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IForum{
  _id: string,
  tema: string,
  tekst: string,
  autor: string,
  brojOdgovora: number,
  datumPostavljanja: string 
}

export interface IForumOdgovor{
  _id: string,
  tekst:string,
  autor: string,
  forumPost: string,
  datumPostavljanja: string 
}

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private _urlForum : string="http://localhost:3000/users/forum";
  private _urlForumOdgovor : string="http://localhost:3000/users/forumodgovor";

  constructor(private http:HttpClient) { }
  getForum() : Observable<IForum[]>
  {
    return this.http.get<IForum[]>(this._urlForum);
  }

  getForumById(id) : Observable<IForum>{
    return this.http.get<IForum>(this._urlForum + '/' + id);
  }

  postForum(Ob)
  {
    this.http.post<IForum>(this._urlForum, Ob)
    .subscribe(
      data => {
          console.log("POST Request is successful ");
      },
      error => {
          console.log("Error");
      }
    );
  }

  updateAnswerNumber(id, incdec)
  {
    return this.http.get<IForum>(this._urlForum + '/' + id + '/' + incdec);
  }

  postForumOdgovor(Ob) {
    this.http.post<IForum>(this._urlForumOdgovor, Ob)
    .subscribe(
      data => {
          console.log("POST Request is successful ");
      },
      error => {
          console.log("Error");
      }
    );
  }

  getForumOdgovor() : Observable<IForumOdgovor[]>
  {
    return this.http.get<IForumOdgovor[]>(this._urlForumOdgovor);
  }

  getForumOdgovorById(id): Observable<IForumOdgovor[]>
  {
    return this.http.get<IForumOdgovor[]>(this._urlForumOdgovor + '/' + id);
  }

  deleteForumByID(id) {
    return this.http.delete<IForum>(this._urlForum + '/' + id,{
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

  deleteForumAnswerById(id, bool){
    return this.http.delete<IForumOdgovor>(this._urlForumOdgovor + '/' + id + '/' + bool,{
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
