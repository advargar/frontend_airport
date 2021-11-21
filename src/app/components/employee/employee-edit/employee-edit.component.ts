import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
  providers: [EmployeeService, UserService]
})
export class EmployeeEditComponent implements OnInit {
  public employee: Employee;
  public employees: any;
  public status;
  public token;
  constructor(
    private _router: Router,
    public _employeeService: EmployeeService,
    public _UserService: UserService,
    private _route: ActivatedRoute,
  ) {
    this.employee = new Employee("", " "," ", "");
    this.token = this._UserService.getToken();
   }

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];// capturamos el id que viene en la URL
    this.getEmployee(id);
  }

  getEmployee(id) {
			// Peticion ajax para sacar los datos del Avion
			this._employeeService.getEmployee(id).subscribe(
				response => {
					if (response.status == 'success') {
            this.employees = response.data;

            this.employee = new Employee(
              this.employee.id = this.employees.id,
              this.employee.name = this.employees.name,
              this.employee.surname = this.employees.surname,
              this.employee.airport = this.employees.airport,
            );
            console.log(this.employee);
					}
				},
				error => {
					console.log(error);
					this._router.navigate(['/gestionar-empleado']);
				}
			);
	}

  onSubmit(form){
        this._employeeService.update(this.token,this.employee, this.employee.id).subscribe(
          response =>{
            if(response.status == 'success'){
              this.employee = response.data;
              this.status = response.status;
              this._router.navigate(['/gestionar-empleado']);
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
