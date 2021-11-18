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
}
