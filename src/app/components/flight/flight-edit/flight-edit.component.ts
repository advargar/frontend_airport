import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../../../services/flight.service';
import { Flight } from '../../../models/flight';
import { UserService } from '../../../services/user.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
  providers: [FlightService, UserService]
})
export class FlightEditComponent implements OnInit {
  public flight: Flight;
  public flights: any;
  public status;
  public token;
  public minDate;
  dateSelected;

	date: { year: number; month: number; } | undefined;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public _flightService: FlightService,
    public _UserService: UserService,
    private calendar: NgbCalendar,
  ) {
    this.flight = new Flight("", " "," ", " ", "", "", "", "");
    this.token = this._UserService.getToken();
    this.minDate = this.calendar.getToday();
  }

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];// capturamos el id que viene en la URL
    this.getFlight(id);
  }

  getFlight(id) {
    // Peticion ajax para sacar los datos del Avion
    this._flightService.getFlight(id).subscribe(
      response => {
        if (response.status == 'success') {
          this.flights = response.data;

          this.flight = new Flight(
            this.flight.id = this.flights.id,
            this.flight.departure = this.flights.departure,
            this.flight.arrival = this.flights.arrival,
            this.flight.assignedDate = this.flights.assignedDate,
            this.flight.passengers = this.flights.passengers,
            this.flight.pilot = this.flights.pilot,
            this.flight.coPilot = this.flights.coPilot,
            this.flight.airplane = this.flights.airplane,
          );
        }
      },
      error => {
        console.log(error);
        this._router.navigate(['/gestionar-vuelo']);
      }
    );
}

onSubmit(form){
      this.flight.assignedDate = this.dateSelected.year + "-" + this.dateSelected.month + "-" + this.dateSelected.day;
      this._flightService.update(this.token,this.flight, this.flight.id).subscribe(
        response =>{
          if(response.status == 'success'){
            this.flight = response.data;
            this.status = response.status;
            this._router.navigate(['/gestionar-vuelo']);
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
