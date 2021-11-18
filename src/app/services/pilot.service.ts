import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilot } from '../models/pilot';
import { global } from './global';

@Injectable({
providedIn: 'root'
})
export class PilotService{
 url = global;
 constructor(private _http: HttpClient){}

 getPilots(): Observable<any>{
   return this._http.get(this.url + 'pilot');
 }
}
