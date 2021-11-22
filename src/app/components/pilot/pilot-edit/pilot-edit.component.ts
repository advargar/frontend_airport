import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PilotService } from '../../../services/pilot.service';
import { Pilot } from '../../../models/pilot';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-pilot-edit',
  templateUrl: './pilot-edit.component.html',
  styleUrls: ['./pilot-edit.component.css'],
  providers: [PilotService, UserService]
})
export class PilotEditComponent implements OnInit {
  public pilot: Pilot;
  public pilots: any;
  public status;
  public token;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public _pilotService: PilotService,
    public _UserService: UserService
  ) {
    this.pilot = new Pilot("", " ");
    this.token = this._UserService.getToken();
  }


  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];// capturamos el id que viene en la URL
    this.getPilot(id);
  }

  getPilot(id) {
    // Peticion ajax para sacar los datos del Avion
    this._pilotService.getPilot(id).subscribe(
      response => {
        if (response.status == 'success') {
          this.pilots = response.data;

          this.pilot = new Pilot(
            this.pilot.id = this.pilots.id,
            this.pilot.idEmployee = this.pilots.idEmployee,
          );
          console.log(this.pilot);
        }
      },
      error => {
        console.log(error);
        this._router.navigate(['/inicio']);
      }
    );
}

onSubmit(form){
  this._pilotService.update(this.token,this.pilot, this.pilot.id).subscribe(
    response =>{
      if(response.status == 'success'){
        this.pilot = response.data;
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
