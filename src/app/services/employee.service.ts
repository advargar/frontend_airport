import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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

 create(token, employee): Observable<any> {
  let json = JSON.stringify(employee);
  let params = "json=" + json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

  return this._http.post(this.url + 'employee', params, { headers: headers });
}

update(token, employee, id):Observable<any>{

  let json = JSON.stringify(employee);
  let params = "json="+json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.put(this.url + 'employee/' + id, params, {headers: headers});
}

delete(token, id){
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.delete(this.url + 'employee/' + id, {headers: headers});
}
}
