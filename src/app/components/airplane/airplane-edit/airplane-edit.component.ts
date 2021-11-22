import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirplaneService } from '../../../services/airplane.service';
import { Airplane } from '../../../models/airplane';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-airplane-edit',
  templateUrl: './airplane-edit.component.html',
  styleUrls: ['./airplane-edit.component.css'],
  providers: [AirplaneService, UserService]
})
export class AirplaneEditComponent implements OnInit {

  public airplane: Airplane;
  public airplanes: any;
  public status;
  public token;
  constructor(
    private _router: Router,
    public _airplaneService: AirplaneService,
    public _UserService: UserService,
    private _route: ActivatedRoute,
  ) {
    this.airplane = new Airplane("", " "," ", " ", "");
    this.token = this._UserService.getToken();
   }

  ngOnInit(): void {
    const userId = this._route.snapshot.params['id'];// capturamos el id que viene en la URL
    this.getAirplane(userId);
  }

  getAirplane(id) {
			// Peticion ajax para sacar los datos del Avion
			this._airplaneService.getAirplane(id).subscribe(
				response => {
					if (response.status == 'success') {
            this.airplanes = response.data;

            this.airplane = new Airplane(
              this.airplane.id = this.airplanes.id,
              this.airplane.airline = this.airplanes.airline,
              this.airplane.model = this.airplanes.model,
              this.airplane.desing = this.airplanes.desing,
              this.airplane.capacity = this.airplanes.capacity,
            );
					}
				},
				error => {
					console.log(error);
					this._router.navigate(['/gestionar-avion']);
				}
			);
	}

  onSubmit(form){
        this._airplaneService.update(this.token,this.airplane, this.airplane.id).subscribe(
          response =>{
            if(response.status == 'success'){
              this.airplane = response.data;
              this.status = response.status;
              this._router.navigate(['/gestionar-avion']);
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
