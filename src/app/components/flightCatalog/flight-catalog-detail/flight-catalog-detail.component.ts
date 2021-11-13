import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Flight_Catalog } from '../../../models/flightCatalog';
import { flightCatalogService } from '../../../services/flightCatalog.service';
import { global } from '../../../services/global';


@Component({
  selector: 'app-flight-catalog-detail',
  templateUrl: './flight-catalog-detail.component.html',
  styleUrls: ['./flight-catalog-detail.component.css'],
  providers:[flightCatalogService]
})
export class FlightCatalogDetailComponent implements OnInit {

  public page_title: string;
  public url: string;
  public flightCatalog!: Flight_Catalog;
  public flightCatalogs: any;
  public isShow : boolean = true;
  filterCategory = '';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _flightCatalogService: flightCatalogService
  ) {
    this.url = global.url;
    this.page_title = 'Listado de Catalogo de Vuelos';
   }

  ngOnInit(): void {
    this.getflightCatalogs();
  }

  getflightCatalogs(){
    this._flightCatalogService.getflightCatalogs().subscribe(
      response =>{
        if(response.status = 'success'){
          this.flightCatalogs =response.data;
        }
      },
      error =>{
        console.log(error);
      }
    );
  }
}
