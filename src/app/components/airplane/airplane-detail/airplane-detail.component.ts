import { Component, OnInit  } from '@angular/core';
import { NgbModal  } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Airplane } from '../../../models/airplane';
import { AirplaneService } from '../../../services/airplane.service';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';
import { faTrash, faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { AirplaneEditComponent } from '../airplane-edit/airplane-edit.component';

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
  public airplane: Airplane;
  public isShow : boolean = true;
  Delete = faTrash;
  Add = faPlusCircle;
  Edit = faEdit;

  editForm!: FormGroup;
  isLoading = false;

  constructor(
    private modalService: NgbModal,
    private _route: ActivatedRoute,
    private _router: Router,
    private formBuilder: FormBuilder,
    private _airplaneService: AirplaneService,

    private _userService: UserService
  ) {
    this.url = global.url;
    this.airplane = new Airplane("", " "," ", " ", "");
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
    this.getAirplanes();
  }


  get editFormData() { return this.editForm.controls; }

  private setForm() {
    console.log(this.airplane);

    this.editForm = this.formBuilder.group({
      id: [this.airplane.id],
      airline: [this.airplane.airline, Validators.required],
      model: [this.airplane.model, Validators.required],
      desing: [this.airplane.desing, ],
      capacity: [this.airplane.capacity, Validators.required]
    });
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
  editItem(airplane: Airplane) {
    // this.router.navigateByUrl(`EditUser/${userModel.id}`);

    const ref = this._airplaneService.open(AirplaneEditComponent, { centered: true });
    ref.componentInstance.selectedUser = airplane;

    ref.result.then((yes) => {
      console.log("Yes Click");

      this.getAirplanes();
    },
      (cancel) => {
        console.log("Cancel Click");

      })
  }
}
