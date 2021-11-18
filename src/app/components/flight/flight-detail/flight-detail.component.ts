import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Flight } from '../../../models/flight';
import { FlightService } from '../../../services/flight.service';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';


@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css'],
  providers: [FlightService, UserService]
})
export class FlightDetailComponent implements OnInit {
  public url: string;
  public flights: any;
  public flightsPrice: any;
  public flightsOffers;
  public identity;
  public token;
  public isShow : boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _flightService: FlightService,
    private _userService: UserService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
    this.isShow  = false;
    this.getdestinyFly('España');
    this.getFlightPrice('España');
    this.getFlightOffers(['Costa Rica', 2000]);
  }

  getFlights(){
    this._flightService.getFlights().subscribe(
      response => {
        if (response.status == 'success') {
          this.flights = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getFlightOffers(form){
    this._flightService.getFlightOffers(form).subscribe(
      response => {
        if (response.status == 'success') {
          this.flightsOffers = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getFlightPrice(country){
    this._flightService.getFlightPriceCountry(country).subscribe(
      response => {
        if (response.status == 'success') {
          this.flightsPrice = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getdestinyFly(country){
    this._flightService.getdestinyFly(country).subscribe(
      response => {
        if (response.status == 'success') {
          this.flights = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteflight(id) {
    this._flightService.delete(this.token, id).subscribe(
      response => {
        this.getFlights();
      },
      error => {
        console.log(error);
      }
    );
  }
}
