/// <reference path="../../../node_modules/@types/google.maps/index.d.ts"/>
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-map-page',
  templateUrl: './doctors-map-page.component.html',
  styleUrls: ['./doctors-map-page.component.css']
})
export class DoctorsMapPageComponent implements OnInit {

  public appointments = [
    {fullName: 'Кауфманн Трофим Витальевич', address: 'ул. Диановых, д. 15, кв. 71', symptoms: 'Жёсткая диарея'},
    {fullName: 'Шкилевич Антон Александрович', address: 'Деревня стрит, д. 1, кв. 1', symptoms: 'Дота головного мозга'},
    {fullName: 'Ковшов Александр Андреевич', address: 'ул. Сакко, д. 37А, кв. 15', symptoms: 'Волосы рыжего цвета'},
    {fullName: 'Орлов Владимир Александрович', address: 'Додо Пицца, д. Супер мясной, кв. 30см', symptoms: 'Хочу есть!'}
  ];

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
