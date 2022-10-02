import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllVendorComponent } from './components/all-vendor/all-vendor.component';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VendorPageComponent } from './components/vendor-page/vendor-page.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'vendor-page', component: VendorPageComponent},
  {path:'all-vendor', component: AllVendorComponent},
  {path:'booking-confirmation', component: BookingConfirmationComponent},
  {path:'flight-search', component: FlightSearchComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
