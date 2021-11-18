import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable()
export class UserService {
	public url: string;
	public identity;
	public token;

	constructor(
		public _http: HttpClient
	){
		this.url = global.url;
	}

	test(){
		return "Hola mundo desde un servicio!!";
	}

	register(user: any): Observable<any>{
		let json = JSON.stringify(user);
		let params = 'json='+json;

		//Definir
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.post(this.url+'user', params, {headers: headers});
	}

	signup(user: any, gettoken = null): Observable<any>{
		if(gettoken != null){
			user.gettoken = 'true';
		}

		//quiza ocupe guardar el token en el localstorage

		let json = JSON.stringify(user);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.post(this.url+'user/login', params, {headers:headers});
	}

	getUsers():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this._http.get(this.url + 'user', {headers: headers});
	}

	getUser(id: string):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this._http.get(this.url + 'user/' + id, {headers: headers});
	}

	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity_user')|| '{}');

		if(identity && identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}

		return this.identity;
	}

	getToken(){
		let token = localStorage.getItem('token_user');

		if(token && token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}

		return this.token;
	}

}
