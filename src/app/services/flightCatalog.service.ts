import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()
export class flightCatalogService{
  public url: string;
 constructor(private _http: HttpClient){
   this.url = global.url;
 }
 getflightCatalogs(): Observable <any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  return this._http.get(this.url + 'flightCatalog', {headers: headers});
 }
 create(token, flightCatalog): Observable<any> {
  let json = JSON.stringify(flightCatalog);
  let params = "json=" + json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

  return this._http.post(this.url + 'flightCatalog', params, { headers: headers });
}

update(token, flightCatalog, id):Observable<any>{
  // Limpiar campo content (editor texto enriquecido) htmlEntities > utf8
  //flightCatalog.description = global.htmlEntities(flightCatalog.description);

  let json = JSON.stringify(flightCatalog);
  let params = "json="+json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.put(this.url + 'flightCatalog/' + id, params, {headers: headers});
}

delete(token, id){
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                   .set('Authorization', token);

   return this._http.delete(this.url + 'flightCatalog/' + id, {headers: headers});
}

}
