import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from '../../../services/airline.service';
import { Airline } from '../../../models/airline';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-airline-edit',
  templateUrl: './airline-edit.component.html',
  styleUrls: ['./airline-edit.component.css'],
  providers: [AirlineService, UserService]
})
export class AirlineEditComponent implements OnInit {

  public airline: Airline;
  public airlines: any;
  public status;
  public token;
  constructor(
    private _router: Router,
    public _airlineService: AirlineService,
    public _UserService: UserService,
    private _route: ActivatedRoute,
  ) {
    this.airline = new Airline("", " "," ");
    this.token = this._UserService.getToken();
   }

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];// capturamos el id que viene en la URL
    this.getAirline(id);
  }

  getAirline(id) {
			// Peticion ajax para sacar los datos del Avion
			this._airlineService.getAirline(id).subscribe(
				response => {
					if (response.status == 'success') {
            this.airlines = response.data;

            this.airline = new Airline(
              this.airline.id = this.airlines.id,
              this.airline.name = this.airlines.name,
              this.airline.alias = this.airlines.alias,
            );
            console.log(this.airline);
					}
				},
				error => {
					console.log(error);
					this._router.navigate(['/gestionar-aerolinea']);
				}
			);
	}

  onSubmit(form){
        this._airlineService.update(this.token,this.airline, this.airline.id).subscribe(
          response =>{
            if(response.status == 'success'){
              this.airline = response.data;
              this.status = response.status;
              this._router.navigate(['/gestionar-aerolinea']);
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
