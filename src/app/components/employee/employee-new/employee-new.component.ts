import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css'],
  providers: [EmployeeService, UserService]
})
export class EmployeeNewComponent implements OnInit {
  public employee: Employee;
  public status;
  public token;
  constructor(
    public _employeeService: EmployeeService,
    public _UserService: UserService
  ) {
    this.employee = new Employee("", " "," ", " ");
    this.token = this._UserService.getToken();
  }

  ngOnInit(): void {
  }

  onSubmit(form){

    this._employeeService.create(this.token,this.employee).subscribe(
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
