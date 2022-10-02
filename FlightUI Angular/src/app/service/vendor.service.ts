import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  bookFlight(vendor: Vendor) :Observable<Vendor>{
    return this.http.post<Vendor>('http://localhost:2008/insert/flight', vendor);
  }

}
