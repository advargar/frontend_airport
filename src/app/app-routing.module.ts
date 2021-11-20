import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { HomeComponent } from './components/global/home/home.component';
import { AirplaneNewComponent } from './components/airplane/airplane-new/airplane-new.component';
import { AirplaneDetailComponent } from './components/airplane/airplane-detail/airplane-detail.component';
import { AirlineDetailComponent } from './components/airline/airline-detail/airline-detail.component';
import { AirlineNewComponent } from './components/airline/airline-new/airline-new.component';
import { AirportDetailComponent } from './components/airport/airport-detail/airport-detail.component';
import { AirportNewComponent } from './components/airport/airport-new/airport-new.component';
import { LoginUserComponent } from './components/user/login-user/login-user.component';
import { RegisterUserComponent } from './components/user/register-user/register-user.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail/employee-detail.component';
import { EmployeeNewComponent } from './components/employee/employee-new/employee-new.component';
import { FlightNewComponent } from './components/flight/flight-new/flight-new.component';
import { FlightDetailComponent } from './components/flight/flight-detail/flight-detail.component';
import { PilotDetailComponent } from './components/pilot/pilot-detail/pilot-detail.component';
import { PilotNewComponent } from './components/pilot/pilot-new/pilot-new.component';
import { FlightCatalogNewComponent } from './components/flightCatalog/flight-catalog-new/flight-catalog-new.component';
import { FlightCatalogDetailComponent } from './components/flightCatalog/flight-catalog-detail/flight-catalog-detail.component';

// Rutas
const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'registro-usuario', component: RegisterUserComponent},
  {path: 'login-user', component: LoginUserComponent},
  {path: 'login-user/:sure', component: LoginUserComponent},
  {path: 'crear-avion', component: AirplaneNewComponent},
  {path: 'gestionar-avion', component: AirplaneDetailComponent},
  {path: 'gestionar-aerolinea', component: AirlineDetailComponent},
  {path: 'registrar-aerolinea', component: AirlineNewComponent},
  {path: 'gestionar-aeropuerto', component: AirportDetailComponent},
  {path: 'registrar-aeropuerto', component: AirportNewComponent},
  {path: 'registro-empleado', component: EmployeeNewComponent},
  {path: 'gestionar-empleado', component: EmployeeDetailComponent},
  {path: 'registro-piloto', component: PilotNewComponent},
  {path: 'gestionar-piloto', component: PilotDetailComponent},
  {path: 'crear-vuelo', component: FlightNewComponent},
  {path: 'gestionar-vuelo', component: FlightDetailComponent},
  {path: 'gestionar-catalogoVuelo', component: FlightCatalogDetailComponent},
  {path: 'crear-catalogoVuelo', component: FlightCatalogNewComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
