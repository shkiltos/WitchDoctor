
import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-map-timer-customer',
  templateUrl: './map-timer-customer.component.html',
  styleUrls: ['./map-timer-customer.component.css']
})
export class MapTimerCustomerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var theRunner = setInterval(() => { this.getDoctorPosition();}, (1000 * 60)); 
  }

  private getDoctorPosition() {

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      params: new HttpParams().set('id', localStorage.getItem('id')!)
    };

    this.http
      .get('http://localhost:8080/api/v1/allAppointments', options)
      .subscribe(response => {
          console.log(response);
      });
    }
}