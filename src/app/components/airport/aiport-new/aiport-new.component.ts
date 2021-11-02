import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Airport } from '../../../models/airport';
import { AirportService } from '../../../services/airport.service';

@Component({
  selector: 'app-airport-new',
  templateUrl: './aiport-new.component.html',
  styleUrls: ['./airport-new.component.css'],
  providers: [AirportService]
})
export class AiportNewComponent implements OnInit {
  public page_title: string;
  public identity;
  public airport: Airport;
  public status: string | undefined;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _airportService: AirportService,
  ) {
    this.page_title = "Agregar un nuevo Aeropuerto";
    this.identity = this._airportService.getAirport;
    this.airport = new Airport(1, "", "", "");
  }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    this._airportService.create(this.airport).subscribe(
      response => {
        if (response.status == 'success'){
          this.status = 'success';

          this._router.navigate(['/../gestionar-aeropuerto']);
        }else {
          this.status = 'error';
          console.log(<any>error);

        }
      }
    )
  }
}
