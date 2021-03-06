import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PilotService } from '../../../services/pilot.service';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';
import { faTrash, faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css'],
  providers: [PilotService, UserService]
})
export class PilotDetailComponent implements OnInit {

  public url: string;
  public pilots: any;
  public identity;
  public token;
  public status;
  Delete = faTrash;
  Add = faPlusCircle;
  Edit = faEdit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _pilotService: PilotService,
    private _userService: UserService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
    this.getPilots();
  }

  getPilots(){
    this._pilotService.getPilots().subscribe(
      response => {
        if (response.status == 'success') {
          this.pilots = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deletePilot(id) {
    this._pilotService.delete(this.token, id).subscribe(
      response => {
        this.getPilots();
      },
      error => {
        console.log(error);
      }
    );
  }
}
