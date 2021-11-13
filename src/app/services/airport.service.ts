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

 getAirport(): Observable<Airport []>{
   return this._http.get<Airport []>(this.url + 'airport/');
 }
}
