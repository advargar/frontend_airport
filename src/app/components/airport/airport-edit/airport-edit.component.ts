import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AirportService } from '../../../services/airport.service';
import { Airport } from '../../../models/airport';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-airport-edit',
  templateUrl: './airport-edit.component.html',
  styleUrls: ['./airport-edit.component.css'],
  providers: [AirportService, UserService]
})
export class AirportEditComponent implements OnInit {
  public airport: Airport;
  public airports: any;
  public status;
  public token;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public _airportService: AirportService,
    public _UserService: UserService
  ) {
    this.airport = new Airport("", " "," ", " ");
    this.token = this._UserService.getToken();
  }


  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];// capturamos el id que viene en la URL
    this.getAirport(id);
  }

  getAirport(id) {
    // Peticion ajax para sacar los datos del Avion
    this._airportService.getAirport(id).subscribe(
      response => {
        if (response.status == 'success') {
          this.airports = response.data;

          this.airport = new Airport(
            this.airport.id = this.airports.id,
            this.airport.name = this.airports.name,
            this.airport.city = this.airports.city,
            this.airport.country = this.airports.country,
          );
          console.log(this.airport);
        }
      },
      error => {
        console.log(error);
        this._router.navigate(['/inicio']);
      }
    );
}

onSubmit(form){
      this._airportService.update(this.token,this.airport, this.airport.id).subscribe(
        response =>{
          if(response.status == 'success'){
            this.airport = response.data;
            this.status = response.status;
            this._router.navigate(['/inicio']);
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
