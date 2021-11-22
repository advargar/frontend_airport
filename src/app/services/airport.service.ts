import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from '../models/airport';
import { global } from './global';

@Injectable({
providedIn: 'root'
})
export class AirportService{
  public url: string;

 constructor(
   private _http: HttpClient
   ){
  this.url = global.url;
}

 getAirports(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this._http.get(this.url + 'airport', {headers: headers});
 }
 getAirport(id): Observable<any> {
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  return this._http.get(this.url + 'airport/' + id, { headers: headers });
}
 getAirportEmployee(airportId): Observable<any>{
  return this._http.get(this.url + 'airport/employee' + airportId);
}

create(token, airport): Observable<any> {
  let json = JSON.stringify(airport);
  let params = "json=" + json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

  return this._http.post(this.url + 'airport', params, { headers: headers });
}

update(token, airport, id):Observable<any>{

  let json = JSON.stringify(airport);
  let params = "json="+json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.put(this.url + 'airport/' + id, params, {headers: headers});
}

delete(token, id){
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.delete(this.url + 'airport/' + id, {headers: headers});
}
}
