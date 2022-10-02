import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from 'src/app/model/flight.model';
import { FlightData } from 'src/app/model/flightData';
import { AllFlightsDetailsService } from 'src/app/service/all-flights-details.service';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  id:string;
  flightDataA: FlightData;
  name:string;
  sum:number = 0;
  constructor(private flightService: AllFlightsDetailsService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');

    this.flightService.getFlightDetailsById(this.id).subscribe(data=>{
    this.flightDataA = data;
    });
    console.log(this.flightDataA.id);
  }
  change(fareForm: NgForm){
    this.sum = (fareForm.value.no_of_adult*this.flightDataA.priceAdult) + 
                (fareForm.value.no_of_children*this.flightDataA.priceChild);
  }
  
}
