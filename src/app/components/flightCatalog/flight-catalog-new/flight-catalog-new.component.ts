import { Component, OnInit } from '@angular/core';
import { flightCatalogService } from '../../../services/flightCatalog.service';
import { Flight_Catalog } from '../../../models/flightCatalog';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-flight-catalog-new',
  templateUrl: './flight-catalog-new.component.html',
  styleUrls: ['./flight-catalog-new.component.css'],
  providers: [flightCatalogService, UserService]
})
export class FlightCatalogNewComponent implements OnInit {

  public flight_Catalog: Flight_Catalog;
  public status;
  public token;
  constructor(
    public _flightCatalogService: flightCatalogService,
    public _UserService: UserService
  ) {
    this.flight_Catalog = new Flight_Catalog(" ", " "," ", " ", "", "", "");
    this.token = this._UserService.getToken();
  }


  ngOnInit(): void {
  }
  onSubmit(form){

    this._flightCatalogService.create(this.token,this.flight_Catalog).subscribe(
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
