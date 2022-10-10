import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actividad } from '../model/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  actividadURL = environment.apiRestURL + '/actividad'

  constructor(private httpClient:HttpClient) { }

  public list():Observable<Actividad[]>{
    return this.httpClient.get<Actividad[]>(this.actividadURL);
  }

  public detail(id:number):Observable<Actividad>{
    return this.httpClient.get<Actividad>(this.actividadURL + `/${id}`);
  }

}