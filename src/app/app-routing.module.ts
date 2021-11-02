import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { HomeComponent } from './components/global/home/home.component';
import { AiportNewComponent } from './components/airport/aiport-new/aiport-new.component';
import { AiportDetailComponent } from './components/airport/aiport-detail/aiport-detail.component';
import { AirplaneNewComponent } from './components/airplane/airplane-new/airplane-new.component';
import { FlightNewComponent } from './components/flight/flight-new/flight-new.component';
import { FlightCatalogNewComponent } from './components/flightCatalog/flight-catalog-new/flight-catalog-new.component';

// Rutas
const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'crear-aeropuerto', component: AiportNewComponent},
  {path: 'gestionar-aeropuerto', component: AiportDetailComponent},
  {path: 'crear-avion', component: AirplaneNewComponent},
  {path: 'crear-vuelo', component: FlightNewComponent},
  {path: 'crear-catalogoVuelo', component: FlightCatalogNewComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
