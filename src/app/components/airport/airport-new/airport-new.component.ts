import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirportService } from '../../../services/airport.service';
import { Airport } from '../../../models/airport';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-airport-new',
  templateUrl: './airport-new.component.html',
  styleUrls: ['./airport-new.component.css'],
  providers: [AirportService, UserService]
})
export class AirportNewComponent implements OnInit {

  public airport: Airport;
  public status;
  public token;
  constructor(
    private _router: Router,
    public _airportService: AirportService,
    public _UserService: UserService
  ) {
    this.airport = new Airport("", " "," ", " ");
    this.token = this._UserService.getToken();
  }

  ngOnInit(): void {
  }
  onSubmit(form){

    this._airportService.create(this.token,this.airport).subscribe(
      response =>{
        if(response.status == 'success'){
          this.status = response.status;
          this._router.navigate(['inicio']);
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
