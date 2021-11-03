import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { HomeComponent } from './components/global/home/home.component';
import { AirplaneNewComponent } from './components/airplane/airplane-new/airplane-new.component';
import { AirlineDetailComponent } from './components/airline/airline-detail/airline-detail.component';
import { FlightNewComponent } from './components/flight/flight-new/flight-new.component';
import { FlightCatalogNewComponent } from './components/flightCatalog/flight-catalog-new/flight-catalog-new.component';
import { FlightCatalogDetailComponent } from './components/flightCatalog/flight-catalog-detail/flight-catalog-detail.component';

// Rutas
const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'crear-avion', component: AirplaneNewComponent},
  {path: 'gestionar-aerolinea', component: AirlineDetailComponent},
  {path: 'crear-vuelo', component: FlightNewComponent},
  {path: 'gestionar-catalogoVuelo', component: FlightCatalogDetailComponent},
  {path: 'crear-catalogoVuelo', component: FlightCatalogNewComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
