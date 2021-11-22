import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models/user';
import {UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  providers: [UserService]
})
export class LoginUserComponent implements OnInit {

  public page_title: string;
	public user: User;
	public status;
	public token;
	public identity;

	constructor(
		private _userService: UserService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
    this.page_title = "Identificate como usuario"
    this.user = new User("", "", "",);
	}

	ngOnInit() {
		// Se ejecuta siempre y cierra sesión solo cuando le llega el parametro sure por la url
		this.logout();
	}

	onSubmit(form){
		this._userService.signup(this.user).subscribe(
			response => {
				// TOKEN
				if(response.status != 'error'){
					this.status = 'success';
					this.token = response;

					// OBJETO USUARIO IDENTIFICADO
					this._userService.signup(this.user).subscribe(
						response => {
							this.identity = response;

							localStorage.setItem('token_user', this.token);
							localStorage.setItem('identity_user', JSON.stringify(this.identity));

							// Redirección a inicio
              this._router.navigate(['inicio']);
						},
						error => {
							this.status = 'error';
							console.log(<any>error);
						}
					);

				}else{
					this.status = 'error';
				}
			},
			error => {
				this.status = 'error';
				console.log(<any>error);
			}
		);
	}

	logout(){
		this._route.params.subscribe(params => {
			let logout = +params['sure'];

			if(logout == 1){
				localStorage.removeItem('identity_user');
				localStorage.removeItem('token_user');

				this.identity = null;
				this.token = null;

				// Redirección a inicio
        this._router.navigate(['inicio']);
			}
		});
	}
}

