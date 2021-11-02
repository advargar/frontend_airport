import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AiportNewComponent } from './components/airport/aiport-new/aiport-new.component';
import { AiportDetailComponent } from './components/airport/aiport-detail/aiport-detail.component';
import { AirplaneNewComponent } from './components/airplane/airplane-new/airplane-new.component';
import { AirplaneDetailComponent } from './components/airplane/airplane-detail/airplane-detail.component';
import { FlightNewComponent } from './components/flight/flight-new/flight-new.component';
import { FlightDetailComponent } from './components/flight/flight-detail/flight-detail.component';
import { FlightCatalogDetailComponent } from './components/flightCatalog/flight-catalog-detail/flight-catalog-detail.component';
import { FlightCatalogNewComponent } from './components/flightCatalog/flight-catalog-new/flight-catalog-new.component';
import { HeaderTopComponent } from './components/global/header-top/header-top.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { HomeComponent } from './components/global/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AiportNewComponent,
    AiportDetailComponent,
    AirplaneNewComponent,
    AirplaneDetailComponent,
    FlightNewComponent,
    FlightDetailComponent,
    FlightCatalogDetailComponent,
    FlightCatalogNewComponent,
    HeaderTopComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
