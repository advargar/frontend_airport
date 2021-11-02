import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from '../models/airport'
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
   }

   create(airport: any): Observable<any> {
     let json = JSON.stringify(airport);
     let params = "json="+ json;

    return this._http.post(this.url + 'airport', params);

   }

   getAirport(id: string): Observable<any>{
     return this._http.get(this.url + 'airport/' + id);
   }

   delete(id: any): Observable<any>{
     return this._http.delete(this.url + 'airport/' + id);
   }
}
