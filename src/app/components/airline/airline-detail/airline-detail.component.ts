import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Airline } from '../../../models/airline';
import { AirlineService } from '../../../services/airline.service';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';
import { faTrash, faPlusCircle  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-airline-detail',
  templateUrl: './airline-detail.component.html',
  styleUrls: ['./airline-detail.component.css'],
  providers: [AirlineService, UserService]
})
export class AirlineDetailComponent implements OnInit {
  public page_title: string;
  public url: string;
  public airline: Airline | undefined;
  public airlines: any;
  public isShow : boolean = true;
  public identity;
   Delete = faTrash;
  Add = faPlusCircle;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _airlineService: AirlineService,
    private _userService: UserService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
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
