/// <reference path="../../../node_modules/@types/google.maps/index.d.ts"/>
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Appointment {

  fullName: string
  street: string,
  house: string,
  apartment: string,
  birthDate: string,
  symptoms: string,
  arrivalDate: string,
  region: string,
  address: string,
  lat: number,
  lng: number
}

@Component({
  selector: 'app-doctors-map-page',
  templateUrl: './doctors-map-page.component.html',
  styleUrls: ['./doctors-map-page.component.css']
})
export class DoctorsMapPageComponent implements OnInit {

  form: FormGroup;
  public origin: any;

  public destination: any;

  public testMode = true;

  public appointments: Appointment[] = [];

  public currentPosition: any;
  
  constructor(private http: HttpClient, private fb: FormBuilder,) {
    this.form = this.fb.group({
      region: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    const options = {
      params: new HttpParams().set('region', 'Участок 17')
    };
    this.http.get<Appointment[]>('/api/v1/allAppointments', options).subscribe(data => {
      this.appointments = data;
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.initMap();
      });
    });
    var theRunner = setInterval(() => { 
      navigator.geolocation.getCurrentPosition((position) => {
        this.setDoctorPosition(position.coords.latitude, position.coords.longitude);
      });
      }, (1000 * 10)); 
    
  }

  private setDoctorPosition(lat: number, lng: number) {

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams().set('region', 'Участок 17').set('lat', lat).set('lng', lng)
    };

    this.http
      .get('http://localhost:8080/api/v1/appointment/setGeo', options)
      .subscribe(response => {
          console.log(response);
      });
  }

  private async getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
        this.currentPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    });
  }

  private initMap(): void {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 6,
        center: { lat: 41.85, lng: -87.65 },
      }
    );

    directionsRenderer.setMap(map);

    (document.getElementById("submit") as HTMLElement).addEventListener(
      "click",
      () => {
        this.calculateAndDisplayRoute(directionsService, directionsRenderer);
      }
    );
  }

  private calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer
  ) {
    const waypts: google.maps.DirectionsWaypoint[] = [];
    const checkboxArray = document.getElementById(
      "waypoints"
    ) as HTMLSelectElement;

    for (let i = 0; i < this.appointments.length; i++) {
      waypts.push({
        location: new google.maps.LatLng(this.appointments[i].lat, this.appointments[i].lng),
        stopover: true,
      });
    }

    directionsService
      .route({
        origin: this.currentPosition,
        destination:  this.currentPosition,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.WALKING,
      })
      .then((response) => {
        response.routes[0].legs.pop();
        directionsRenderer.setDirections(response);

        const route = response.routes[0];
        const summaryPanel = document.getElementById(
          "directions-panel"
        ) as HTMLElement;

        summaryPanel.innerHTML = "";

        // For each route, display summary information.
        for (let i = 0; i < route.legs.length; i++) {
          const routeSegment = i + 1;

          // summaryPanel.innerHTML +=
          //   "<b>Route Segment: " + routeSegment + "</b><br>";
          // summaryPanel.innerHTML += route.legs[i].start_address + " to ";
          // summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
          // summaryPanel.innerHTML += route.legs[i].distance!.text + "<br><br>";
        }
      })
      .catch((e) => {
        // window.alert("Directions request failed due to " + status)
        console.log("Directions request failed due to " + status);
      });
  }


  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      try {
        const region = this.form.get('region')?.value;

        const options = {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
          params: new HttpParams().set('region', region)
        };

        this.http
          .get<Appointment[]>('http://localhost:8080/api/v1/allAppointments', options)
          .subscribe(response => {
            this.appointments = response;
          },
            error => {
              console.log(error);
            });
      } catch (err) {
        console.log(err);
      }
    }
  }
}
