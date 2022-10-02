import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/model/flight.model';
import { AllFlightsDetailsService } from 'src/app/service/all-flights-details.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  flightSearchArry : Flight[];
  constructor(private allFlight: AllFlightsDetailsService) { }

  ngOnInit(): void {
    // this.allFlight.getFlight().subscribe(data=>{
    //   this.flightSearchArry = data;
    // });
    
    // this.allFlightDetailsService.getAllFlights().subscribe(data=>{
    //   this.flightArry = data;
    // });
  }

}
