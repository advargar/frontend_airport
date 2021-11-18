import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { global } from './global';

@Injectable({
providedIn: 'root'
})
export class EmployeeService{
 url = global;
 constructor(private _http: HttpClient){}

 getEmployees(): Observable<any>{
   return this._http.get(this.url + 'employee');
 }
}
