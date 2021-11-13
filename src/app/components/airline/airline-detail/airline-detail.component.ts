import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Airline } from '../../../models/airline';
import { AirlineService } from '../../../services/airline.service';
import { global } from '../../../services/global';

@Component({
  selector: 'app-airline-detail',
  templateUrl: './airline-detail.component.html',
  styleUrls: ['./airline-detail.component.css'],
  providers: [AirlineService]
})
export class AirlineDetailComponent implements OnInit {
  public page_title: string;
  public url: string;
  public airline: Airline | undefined;
  public airlines: any;
  public isShow : boolean = true;
  filterCategory = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _airlineService: AirlineService,
  ) {
    this.url = global.url;
    this.page_title = 'Listado de aerolineas';
   }

  ngOnInit(): void {
    this.isShow  = false;
    this.getAirlines();
  }
  getAirlines(){
    this._airlineService.getAirlines().subscribe(
      response => {
        if (response.status == 'success') {
          this.airlines = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
