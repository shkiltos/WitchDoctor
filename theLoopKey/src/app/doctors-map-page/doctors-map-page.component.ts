/// <reference path="../../../node_modules/@types/google.maps/index.d.ts"/>
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Appointment {
  lat: number;

  lng: number;

  fullName: string;

  address: string;

  symptoms: string;

  arrivalDate: Date;
}

@Component({
  selector: 'app-doctors-map-page',
  templateUrl: './doctors-map-page.component.html',
  styleUrls: ['./doctors-map-page.component.css']
})
export class DoctorsMapPageComponent implements OnInit {

  public origin: any;

  public destination: any;

  public testMode = true;

  public appointments: Appointment[] = [];

  public currentPosition: any;
  // public appointments = [
  //   {fullName: 'Кауфманн Трофим Витальевич', address: 'ул. Диановых, д. 15, кв. 71', symptoms: 'Жёсткая диарея'},
  //   {fullName: 'Шкилевич Антон Александрович', address: 'Деревня стрит, д. 1, кв. 1', symptoms: 'Дота головного мозга'},
  //   {fullName: 'Ковшов Александр Андреевич', address: 'ул. Сакко, д. 37А, кв. 15', symptoms: 'Волосы рыжего цвета'},
  //   {fullName: 'Орлов Владимир Александрович', address: 'Додо Пицца, д. Супер мясной, кв. 30см', symptoms: 'Хочу есть!'}
  // ];

  constructor(private http: HttpClient) { }

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
  
    for (let i = 0; i < this.appointments.length - 1; i++) {
      waypts.push({
        location: new google.maps.LatLng(this.appointments[i].lat, this.appointments[i].lng),
        stopover: true,
      });
    }
  
    let destinationPos = new google.maps.LatLng(this.appointments[this.appointments.length-1].lat, this.appointments[this.appointments.length-1].lng);

    directionsService
      .route({
        origin: this.currentPosition,
        destination:  destinationPos,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.WALKING,
      })
      .then((response) => {
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
}
