import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  } from '../models/flightCatalog';
import { global } from './global';

@Injectable()
export class flightCatalogService{
  public url: string;
 constructor(private _http: HttpClient){
   this.url = global.url;
 }
 getflightCatalogs(): Observable <any>{

  return this._http.get(this.url + 'flightCatalog');
 }
}
