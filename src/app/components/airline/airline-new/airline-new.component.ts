import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../../../services/airline.service';
import { Airline } from '../../../models/airline';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-airline-new',
  templateUrl: './airline-new.component.html',
  styleUrls: ['./airline-new.component.css'],
  providers: [AirlineService, UserService]
})
export class AirlineNewComponent implements OnInit {

  public airline: Airline;
  public status;
  public token;
  constructor(
    public _airlineService: AirlineService,
    public _UserService: UserService
  ) {
    this.airline = new Airline(1, " "," ");
    this.token = this._UserService.getToken();
  }

  ngOnInit(): void {
  }

  onSubmit(form){

    this._airlineService.create(this.token,this.airline).subscribe(
      response =>{
        if(response.status == 'success'){
          this.status = response.status;
          form.reset();
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
