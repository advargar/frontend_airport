import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flightCatalogService } from '../../../services/flightCatalog.service';
import { Flight_Catalog } from '../../../models/flightCatalog';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-flight-catalog-edit',
  templateUrl: './flight-catalog-edit.component.html',
  styleUrls: ['./flight-catalog-edit.component.css'],
  providers: [flightCatalogService, UserService]
})
export class FlightCatalogEditComponent implements OnInit {

  public flight_Catalog: Flight_Catalog;
  public flight_Catalogs: any;
  public status;
  public token;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public _flightCatalogService: flightCatalogService,
    public _UserService: UserService,
  ) {
    this.flight_Catalog = new Flight_Catalog(" ", " "," ", " ", "", "", "");
    this.token = this._UserService.getToken();

  }


  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];// capturamos el id que viene en la URL
    this.getFlight_Catalog(id);
  }

  getFlight_Catalog(id) {
    // Peticion ajax para sacar los datos del Avion
    this._flightCatalogService.getflightCatalog(id).subscribe(
      response => {
        if (response.status == 'success') {
          this.flight_Catalogs = response.data;

          this.flight_Catalog = new Flight_Catalog(
            this.flight_Catalog.id = this.flight_Catalogs.id,
            this.flight_Catalog.aeroline = this.flight_Catalogs.aeroline,
            this.flight_Catalog.departure = this.flight_Catalogs.departure,
            this.flight_Catalog.arrival = this.flight_Catalogs.arrival,
            this.flight_Catalog.estimated_time = this.flight_Catalogs.estimated_time,
            this.flight_Catalog.price_ticket = this.flight_Catalogs.price_ticket,
            this.flight_Catalog.status = this.flight_Catalogs.status
          );
        }
      },
      error => {
        console.log(error);
        this._router.navigate(['/inicio']);
      }
    );
}

onSubmit(form){
      this._flightCatalogService.update(this.token,this.flight_Catalog, this.flight_Catalog.id).subscribe(
        response =>{
          if(response.status == 'success'){
            this.flight_Catalog = response.data;
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
