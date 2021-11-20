import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airplane } from '../models/airplane';
import { global } from './global';

@Injectable()
export class AirplaneService{
  public url: string;
 constructor(private _http: HttpClient){
   this.url = global.url;
 }

 getAirplanes(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this._http.get(this.url + 'airplane', {headers: headers});
 }

 getAirplane(id): Observable<any> {
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  return this._http.get(this.url + 'airplane/' + id, { headers: headers });
}

 create(token, airplane): Observable<any> {
  let json = JSON.stringify(airplane);
  let params = "json=" + json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

  return this._http.post(this.url + 'airplane', params, { headers: headers });
}

update(token, airplane, id):Observable<any>{

  let json = JSON.stringify(airplane);
  let params = "json="+json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.put(this.url + 'airplane/' + id, params, {headers: headers});
}

delete(token, id){
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.delete(this.url + 'airplane/' + id, {headers: headers});
}
}
