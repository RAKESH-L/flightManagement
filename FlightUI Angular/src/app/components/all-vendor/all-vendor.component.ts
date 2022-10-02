import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.model';
import { AllFlightsDetailsService } from 'src/app/service/all-flights-details.service';

@Component({
  selector: 'app-all-vendor',
  templateUrl: './all-vendor.component.html',
  styleUrls: ['./all-vendor.component.css']
})
export class AllVendorComponent implements OnInit {

  flightArry : Vendor[];
  constructor(private allFlightDetailsService: AllFlightsDetailsService) { }

  ngOnInit(): void {
    this.allFlightDetailsService.getAllFlights().subscribe(data=>{
      this.flightArry = data;
    });
  }

}
