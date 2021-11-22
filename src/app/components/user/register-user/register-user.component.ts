import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import {UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [UserService]
})
export class RegisterUserComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status;
  constructor(
    public _userService: UserService
  ) {
    this.page_title = "Registrate como usuario"
    this.user = new User( " "," ", " ");
  }

  ngOnInit(): void {
  }

  onSubmit(form){

    this._userService.register(this.user).subscribe(
      response =>{
        if(response.status == 'success'){
          this.status = response.status;
          form.reset();
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
}
