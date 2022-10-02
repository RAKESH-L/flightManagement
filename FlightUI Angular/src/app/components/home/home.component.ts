import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from 'src/app/model/flight.model';
import { AllFlightsDetailsService } from 'src/app/service/all-flights-details.service';
import { bookData } from 'src/app/model/bookData.model';
import { BookingService } from 'src/app/service/booking.service';
import { FlightData } from 'src/app/model/flightData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flightArr: FlightData[];
  bookDataArry: bookData;
  flight: Flight;
  constructor(private allFlightService: AllFlightsDetailsService, 
    private bookingService: BookingService, private router:Router) { }

  ngOnInit(): void {  
    
  }
  onflightSubmit(flightForm : NgForm){ 
    this.allFlightService.bookFlight(flightForm.value.source,flightForm.value.destination,
      flightForm.value.depDate).subscribe(data=>{
          this.flightArr = data;
        });
        console.log(this.flightArr)
    // console.log(flight);
    // console.log(flightForm.value.source);
    // console.log(flightForm.value.destination);
    // console.log(flightForm.value.depDate);
  }
  bookFlight(id: number){
    // console.log('Rakesh');
    // this.allFlightService.showBooking(id).subscribe(data=>{
    //     this.bookDataArry = data;
    // });
    console.log(this.bookDataArry);
    console.log(id);
    localStorage.setItem('id',String(id));
    this.router.navigateByUrl('/booking-confirmation');
  }
}
