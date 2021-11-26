import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css'],
})
export class InitialFormComponent implements OnInit {

  constructor() { }
  startDate = new Date(1990, 0, 1);
  fullName: string = "";
  birthDate: string = "";
  streetVal: string = "";
  houseVal: string = "";
  apartmentVal: string = "";
  symptoms: string = "";
  arrivalDate: string = "";
  forChild: boolean = false;

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  streets: any[] = [
    {viewValue: 'Gromoboyyya'},
    {viewValue: 'Ssaki'},
    {viewValue: 'Rainbownaya'},
  ];

  houses: any[] = [
    {viewValue: '1'},
    {viewValue: '2'},
    {viewValue: '44'},
  ];

  flats: any[] = [
    {viewValue: '54'},
    {viewValue: '32'},
    {viewValue: '23'},
  ];
  callData: any = {
  };

  ngOnInit(): void {
  }

  onClickCall(): void {
    this.callData = {
      "fullName": this.fullName,
      "birthDate": this.birthDate,
      "street": this.streetVal,
      "house": this.houseVal,
      "apartment": this.apartmentVal,
      "symptoms": this.symptoms,
      "arrivalDate": this.arrivalDate,
      "forChild": this.forChild
    };
    alert(name);
    console.log(this.callData);
  }
}
