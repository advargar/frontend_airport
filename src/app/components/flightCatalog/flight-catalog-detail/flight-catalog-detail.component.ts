import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Flight_Catalog } from '../../../models/flightCatalog';
import { flightCatalogService } from '../../../services/flightCatalog.service';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';
import { faTrash, faPlusCircle,faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flight-catalog-detail',
  templateUrl: './flight-catalog-detail.component.html',
  styleUrls: ['./flight-catalog-detail.component.css'],
  providers:[flightCatalogService, UserService]
})
export class FlightCatalogDetailComponent implements OnInit {

  public page_title: string;
  public url: string;
  public flightCatalogs: any;
  public isShow : boolean = true;
  public identity;
  public token;
  Delete = faTrash;
  Add = faPlusCircle;
  Edit = faEdit;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _flightCatalogService: flightCatalogService,
    private _userService: UserService
  ) {
    this.url = global.url;
    this.page_title = 'Listado de Catalogo de Vuelos';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
    this.getflightCatalogs();
  }

  getflightCatalogs(){

    this._flightCatalogService.getflightCatalogs().subscribe(
      response =>{
        if(response.status = 'success'){
          this.flightCatalogs =response.data;
          console.log(this.flightCatalogs);
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

  deleteflightCatalog(id) {
    this._flightCatalogService.delete(this.token, id).subscribe(
      response => {
        this.getflightCatalogs();
      },
      error => {
        console.log(error);
      }
    );
  }
}
