import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';
import { faTrash, faPlusCircle  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [EmployeeService, UserService]
})
export class EmployeeDetailComponent implements OnInit {

  public url: string;
  public employees: any;
  public identity;
  public token;
  public isShow : boolean = true;

  Delete = faTrash;
  Add = faPlusCircle;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _employeeService: EmployeeService,
    private _userService: UserService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(){
    this._employeeService.getEmployees().subscribe(
      response => {
        if (response.status == 'success') {
          this.employees = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
