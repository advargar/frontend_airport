import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AirplaneNewComponent } from './components/airplane/airplane-new/airplane-new.component';
import { AirplaneDetailComponent } from './components/airplane/airplane-detail/airplane-detail.component';
import { FlightNewComponent } from './components/flight/flight-new/flight-new.component';
import { FlightDetailComponent } from './components/flight/flight-detail/flight-detail.component';
import { FlightCatalogDetailComponent } from './components/flightCatalog/flight-catalog-detail/flight-catalog-detail.component';
import { FlightCatalogNewComponent } from './components/flightCatalog/flight-catalog-new/flight-catalog-new.component';
import { HeaderTopComponent } from './components/global/header-top/header-top.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { HomeComponent } from './components/global/home/home.component';
import { AirlineDetailComponent } from './components/airline/airline-detail/airline-detail.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail/employee-detail.component';
import { EmployeeNewComponent } from './components/employee/employee-new/employee-new.component';
import { AirlineNewComponent } from './components/airline/airline-new/airline-new.component';
import { PilotDetailComponent } from './components/pilot/pilot-detail/pilot-detail.component';
import { PilotNewComponent } from './components/pilot/pilot-new/pilot-new.component';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';
import { AirportNewComponent } from './components/airport/airport-new/airport-new.component';
import { AirportDetailComponent } from './components/airport/airport-detail/airport-detail.component';
import { LoginUserComponent } from './components/user/login-user/login-user.component';
import { AirportEditComponent } from './components/airport/airport-edit/airport-edit.component';
import { AirlineEditComponent } from './components/airline/airline-edit/airline-edit.component';
import { PilotEditComponent } from './components/pilot/pilot-edit/pilot-edit.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { FlightEditComponent } from './components/flight/flight-edit/flight-edit.component';
import { FlightCatalogEditComponent } from './components/flightCatalog/flight-catalog-edit/flight-catalog-edit.component';
import { AirplaneEditComponent } from './components/airplane/airplane-edit/airplane-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AirplaneNewComponent,
    AirplaneDetailComponent,
    FlightNewComponent,
    FlightDetailComponent,
    FlightCatalogDetailComponent,
    FlightCatalogNewComponent,
    HeaderTopComponent,
    FooterComponent,
    HomeComponent,
    AirlineDetailComponent,
    EmployeeDetailComponent,
    EmployeeNewComponent,
    AirlineNewComponent,
    PilotDetailComponent,
    PilotNewComponent,
    RegisterUserComponent,
    AirportNewComponent,
    AirportDetailComponent,
    LoginUserComponent,
    AirportEditComponent,
    AirlineEditComponent,
    PilotEditComponent,
    EmployeeEditComponent,
    FlightEditComponent,
    FlightCatalogEditComponent,
    AirplaneEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ FormBuilder,],
  bootstrap: [AppComponent]
})
export class AppModule { }
