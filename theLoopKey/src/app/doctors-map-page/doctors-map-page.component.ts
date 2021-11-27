/// <reference path="../../../node_modules/@types/google.maps/index.d.ts"/>
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Appointment {
  at: number;

  long: number;

  patientName: string;

  address: string;

  symptoms: string;
}

@Component({
  selector: 'app-doctors-map-page',
  templateUrl: './doctors-map-page.component.html',
  styleUrls: ['./doctors-map-page.component.css']
})
export class DoctorsMapPageComponent implements OnInit {

  public testMode = true;

  public appointments1: Appointment[] = [];
  public appointments = [
    {fullName: 'Кауфманн Трофим Витальевич', address: 'ул. Диановых, д. 15, кв. 71', symptoms: 'Жёсткая диарея'},
    {fullName: 'Шкилевич Антон Александрович', address: 'Деревня стрит, д. 1, кв. 1', symptoms: 'Дота головного мозга'},
    {fullName: 'Ковшов Александр Андреевич', address: 'ул. Сакко, д. 37А, кв. 15', symptoms: 'Волосы рыжего цвета'},
    {fullName: 'Орлов Владимир Александрович', address: 'Додо Пицца, д. Супер мясной, кв. 30см', symptoms: 'Хочу есть!'}
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const options = {
      params: new HttpParams().set('region', 'Участок17')
    };
    this.http.get<Appointment[]>('/api/v1/allAppointments', options).subscribe(data => {
      this.appointments1 = data;
    });
    this.initMap();
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
  
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray.options[i].selected) {
        waypts.push({
          location: (checkboxArray[i] as HTMLOptionElement).value,
          stopover: true,
        });
      }
    }
  
    directionsService
      .route({
        origin: (document.getElementById("start") as HTMLInputElement).value,
        destination: (document.getElementById("end") as HTMLInputElement).value,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
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
  
          summaryPanel.innerHTML +=
            "<b>Route Segment: " + routeSegment + "</b><br>";
          summaryPanel.innerHTML += route.legs[i].start_address + " to ";
          summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
          summaryPanel.innerHTML += route.legs[i].distance!.text + "<br><br>";
        }
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  }
}
