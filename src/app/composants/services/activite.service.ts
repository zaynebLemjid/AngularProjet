import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activite } from '../classes/activite';
import { Observable } from 'rxjs';
import { tick } from '@angular/core/testing';
const URL='http://localhost:3000/activites';
@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  modifierActivite(activite: Activite) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http:HttpClient
  ) { }

  lesActivites:Activite[]=[];
  getActivites():Observable<Activite[]>{
    return this.http.get<Activite[]>(URL);
  }

  getActivitesById(id:number):Observable<Activite>{
    return this.http.get<Activite>(`${URL}/${id}`);
  }

  deleteActivite(id:number):Observable<any>{
    return this.http.delete(URL+"/"+id);
  }

  public addActivite(a : Activite ):Observable<Activite>{
    return this.http.post<Activite>(URL,a);
  }
  
}