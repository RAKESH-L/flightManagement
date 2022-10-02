import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bookData } from '../model/bookData.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  // postEmployee(employee: Employee) : Observable<Employee> {
  //   return this.http.post<Employee>('http://localhost:2881/employee/insert', employee);
  // }
}
