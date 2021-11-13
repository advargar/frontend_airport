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
}
