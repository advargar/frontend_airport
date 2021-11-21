import { Component, OnInit  } from '@angular/core';
import { AirplaneService } from '../../../services/airplane.service';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';
import { faTrash, faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-airplane-detail',
  templateUrl: './airplane-detail.component.html',
  styleUrls: ['./airplane-detail.component.css'],
  providers:[AirplaneService, UserService]
})
export class AirplaneDetailComponent implements OnInit {

  public url: string;
  public airplanes: any;
  public identity;
  public token;
  Delete = faTrash;
  Add = faPlusCircle;
  Edit = faEdit;

  constructor(
    private _airplaneService: AirplaneService,
    private _userService: UserService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
    this.getAirplanes();
  }


  getAirplanes(){
    this._airplaneService.getAirplanes().subscribe(
      response => {
        if (response.status == 'success') {
          this.airplanes = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteAirplane(id) {
    this._airplaneService.delete(this.token, id).subscribe(
      response => {
        this.getAirplanes();
      },
      error => {
        console.log(error);
      }
    );
  }
}
