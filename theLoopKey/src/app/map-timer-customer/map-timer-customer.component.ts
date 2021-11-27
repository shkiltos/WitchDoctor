
import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

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
  selector: 'app-map-timer-customer',
  templateUrl: './map-timer-customer.component.html',
  styleUrls: ['./map-timer-customer.component.css']
})
export class MapTimerCustomerComponent implements OnInit {
  public origin: any;

  public destination: any;

  public testMode = true;

  public appointments: Appointment[] = [];

  public currentPosition: any;

  public firstTime: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const options = {
      params: new HttpParams().set('region', 'Участок 17')
    };
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.initMap();
      var theRunner = setInterval(() => { this.getDoctorPosition();}, (1000 * 5)); 
    });
    
  }

  private getDoctorPosition() {

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams().set('id', localStorage.getItem('id')!)
    };

    this.http
      .get<any>('http://localhost:8080/api/v1/appointment/getGeo', options)
      .subscribe(response => {
          console.log(response);
          if (response.lat && response.lng) {
            this.origin = new google.maps.LatLng(response.lat, response.lng);
            this.destination = this.currentPosition;
          }
      });
  }

  private setDoctorPosition(lat: number, lng: number) {

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

    (document.getElementById("refresh") as HTMLElement).addEventListener(
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

    directionsService
      .route({
        origin: this.origin,
        destination:  this.destination,
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.WALKING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);

        const route = response.routes[0];
        
      })
      .catch((e) => {
        // window.alert("Directions request failed due to " + status)
        console.log("Directions request failed due to " + status);
      });
  }
}
