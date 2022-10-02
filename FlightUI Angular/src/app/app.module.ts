import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { VendorPageComponent } from './components/vendor-page/vendor-page.component';
import { AllVendorComponent } from './components/all-vendor/all-vendor.component';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    VendorPageComponent,
    AllVendorComponent,
    BookingConfirmationComponent,
    PageNotFoundComponent,
    FlightSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
