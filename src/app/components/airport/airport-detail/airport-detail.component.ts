import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Airport } from '../../../models/airport';
import { AirportService } from '../../../services/airport.service';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';
import { faTrash, faPlusCircle  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-airport-detail',
  templateUrl: './airport-detail.component.html',
  styleUrls: ['./airport-detail.component.css'],
  providers:[AirportService, UserService]
})
export class AirportDetailComponent implements OnInit {

  public url: string;
  //public airport: Airport;
  public airports: any;
  public identity;
  public token;
  public isShow : boolean = true;
  Delete = faTrash;
  Add = faPlusCircle;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _airportService: AirportService,
    private _userService: UserService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }


  ngOnInit(): void {
    this.getAirports();

  }

  getAirports(){
    this._airportService.getAirports().subscribe(
      response => {
        if (response.status == 'success') {
          this.airports = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getairportEmployee(airportid){
    this._airportService.getAirportEmployee(airportid).subscribe(
      response => {
        if (response.status == 'success') {
          this.airports = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
