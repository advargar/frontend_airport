import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AirlineDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
