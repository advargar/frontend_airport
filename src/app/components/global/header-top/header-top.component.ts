import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css'],
  providers:[UserService]
})
export class HeaderTopComponent implements OnInit {
	public token;
  constructor(
    private _userService: UserService
  ) {
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
  }

}
