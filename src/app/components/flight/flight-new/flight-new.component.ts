import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../services/flight.service';
import { Flight } from '../../../models/flight';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-flight-new',
  templateUrl: './flight-new.component.html',
  styleUrls: ['./flight-new.component.css'],
  providers: [FlightService, UserService]
})
export class FlightNewComponent implements OnInit {

  public flight: Flight;
  public status;
  public token;
  constructor(
    public _flightService: FlightService,
    public _UserService: UserService
  ) {
    this.flight = new Flight("", " "," ", " ", "", "", "", "");
    this.token = this._UserService.getToken();
  }
  ngOnInit(): void {
  }

  onSubmit(form){

    this._flightService.create(this.token,this.flight).subscribe(
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
