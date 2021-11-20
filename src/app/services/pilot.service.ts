import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilot } from '../models/pilot';
import { global } from './global';

@Injectable({
providedIn: 'root'
})
export class PilotService{
  public url: string;
 constructor(private _http: HttpClient){
   this.url = global.url;
 }

 getPilots(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  return this._http.get(this.url + 'pilot', {headers: headers});
 }
 create(token, pilot): Observable<any> {
  let json = JSON.stringify(pilot);
  let params = "json=" + json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

  return this._http.post(this.url + 'pilot', params, { headers: headers });
}

update(token, pilot, id):Observable<any>{

  let json = JSON.stringify(pilot);
  let params = "json="+json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.put(this.url + 'pilot/' + id, params, {headers: headers});
}

delete(token, id){
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.delete(this.url + 'pilot/' + id, {headers: headers});
}
}
