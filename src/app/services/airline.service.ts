import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airline } from '../models/airline';
import { global } from './global';

@Injectable()
export class AirlineService{
  public url: string;
 constructor(private _http: HttpClient){
   this.url = global.url;
 }

 getAirlines(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this._http.get(this.url + 'airline', {headers: headers});
 }
 getAirline(id): Observable<any> {
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  return this._http.get(this.url + 'airline/' + id, { headers: headers });
}

 create(token, airline): Observable<any> {
  let json = JSON.stringify(airline);
  let params = "json=" + json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

  return this._http.post(this.url + 'airline', params, { headers: headers });
}

update(token, airline, id):Observable<any>{

  let json = JSON.stringify(airline);
  let params = "json="+json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.put(this.url + 'airline/' + id, params, {headers: headers});
}

delete(token, id){
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.delete(this.url + 'airline/' + id, {headers: headers});
}
}
