/// <reference path="../../../node_modules/@types/google.maps/index.d.ts"/>
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-map-page',
  templateUrl: './doctors-map-page.component.html',
  styleUrls: ['./doctors-map-page.component.css']
})
export class DoctorsMapPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    
    var map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
}
