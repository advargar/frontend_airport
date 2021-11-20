import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  public status;
  public token;

  editForm!: FormGroup;
  isLoading = false;
  modal: any;
  constructor(
    private modalService: NgbActiveModal,
    private _route: ActivatedRoute,
    private _router: Router,
    private formBuilder: FormBuilder,
    public _airplaneService: AirplaneService,
    public _UserService: UserService
  ) {
    this.airplane = new Airplane("", " "," ", " ", "");
    this.token = this._UserService.getToken();
  }

  ngOnInit(): void {
    this.setForm();
  }

  get editFormData() { return this.editForm.controls; }

  private setForm() {
    console.log(this.airplane);

    this.editForm = this.formBuilder.group({
      id: [this.airplane.id],
      airline: [this.airplane.airline, Validators.required],
      model: [this.airplane.model, Validators.required],
      desing: [this.airplane.desing, Validators.required],
      capacity: [this.airplane.capacity, Validators.required]
    });
  }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this._airplaneService.update(this.token,this.editForm.value, this.airplane.id).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }
}
