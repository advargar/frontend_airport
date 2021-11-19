import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PilotService } from '../../../services/pilot.service';
import { Pilot } from '../../../models/pilot';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-pilot-new',
  templateUrl: './pilot-new.component.html',
  styleUrls: ['./pilot-new.component.css'],
  providers: [PilotService, UserService]
})
export class PilotNewComponent implements OnInit {

  public pilot: Pilot;
  public status;
  public token;
  constructor(
    private _router: Router,
    public _pilotService: PilotService,
    public _UserService: UserService
  ) {
    this.pilot = new Pilot("", " ");
    this.token = this._UserService.getToken();
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._pilotService.create(this.token,this.pilot).subscribe(
      response =>{
        if(response.status == 'success'){
          this.status = response.status;
          this._router.navigate(['inicio']);
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
