import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';
import { global } from './global';

@Injectable({
providedIn: 'root'
})
export class FlightService{
  public url: string;

 constructor(
   private _http: HttpClient
   ){
  this.url = global.url;
}

 getFlights(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  return this._http.get(this.url + 'flight', {headers: headers});
 }

 getFlightOffers(flight): Observable<any>{
  let json = JSON.stringify(flight);
  let params = "json=" + json;

  return this._http.get(this.url + 'flight/oferts' + params);
}

getFlightPriceCountry(country): Observable<any>{
  let json = JSON.stringify(country);
  let params = "json=" + json;

  return this._http.get(this.url + 'flight/country' + params);
}

getPilotAirline(alias): Observable<any>{
  let json = JSON.stringify(alias);
  let params = "json=" + json;

  return this._http.get(this.url + 'flight/pilot' + params);
}

getdestinyFly(country): Observable<any>{
  let json = JSON.stringify(country);
  let params = "json=" + json;

  return this._http.get(this.url + 'flight/destiny' + params);
}

 create(token, flight): Observable<any> {
  let json = JSON.stringify(flight);
  let params = "json=" + json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

  return this._http.post(this.url + 'flight', params, { headers: headers });
}

update(token, flight, id):Observable<any>{

  let json = JSON.stringify(flight);
  let params = "json="+json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.put(this.url + 'flight/' + id, params, {headers: headers});
}

delete(token, id){
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.delete(this.url + 'flight/' + id, {headers: headers});
}
}
