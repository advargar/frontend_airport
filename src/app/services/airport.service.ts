import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
}
