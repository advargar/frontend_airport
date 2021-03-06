import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirplaneService } from '../../../services/airplane.service';
import { Airplane } from '../../../models/airplane';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-airplane-new',
  templateUrl: './airplane-new.component.html',
  styleUrls: ['./airplane-new.component.css'],
  providers: [AirplaneService, UserService]
})
export class AirplaneNewComponent implements OnInit {

  public airplane: Airplane;
  public status;
  public token;
  constructor(
    private _router: Router,
    public _airplaneService: AirplaneService,
    public _UserService: UserService
  ) {
    this.airplane = new Airplane("", " "," ", " ", "");
    this.token = this._UserService.getToken();
  }

  ngOnInit(): void {
  }

  onSubmit(form){
console.log(this.airplane);
    this._airplaneService.create(this.token,this.airplane).subscribe(
      response =>{
        if(response.status == 'success'){
          this.status = response.status;
          this._router.navigate(['/gestionar-avion']);
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
