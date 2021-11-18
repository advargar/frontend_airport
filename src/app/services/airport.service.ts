import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from '../models/airport';
import { global } from './global';

@Injectable({
providedIn: 'root'
})
export class AirportService{
 url = global;
 constructor(private _http: HttpClient){}

 getAirports(): Observable<any>{
   return this._http.get(this.url + 'airport');
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
