import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css'],
})
export class InitialFormComponent implements OnInit {

  constructor(    
    private http: HttpClient,
    private router: Router,

  ) { }
  startDate = new Date(1990, 0, 1);
  fullName: string = "";
  birthDate: string = "";
  streetVal: string = "";
  houseVal: string = "";
  apartmentVal: string = "";
  symptoms: string = "";
  arrivalDate: string = "";
  forChild: boolean = false;

  toPerson: string = "";

  toMe: string = "Себе";
  toChild: string = "Ребенку";
  toAnother: string = "Другому человеку";

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  streets: any[] = [
    {viewValue: '1-й Бульварный проезд'},
    {viewValue: '2-й Бульварный проезд'},
    {viewValue: 'Большая улица'},
    {viewValue: 'Бульвар Оптимистов проезд'},
    {viewValue: 'Зелёная улица'},
    {viewValue: 'Касимовское шоссе'},
    {viewValue: 'Тимакова улица'},
    {viewValue: 'Советской Армии улица'},
    {viewValue: 'Васильевская улица'},
    {viewValue: 'Васильевская проезд'},
    {viewValue: 'Новосёлов улица'}
  ];

  houses: any[] = [];

  public initHouses(event: any) {
    if (event == '1-й Бульварный проезд') {
      this.houses = [
        {viewValue: '2'}
      ];
    }
    if (event == '2-й Бульварный проезд') {
      this.houses = [
        {viewValue: '1'},
        {viewValue: '2'},
        {viewValue: '3'},
        {viewValue: '4'},
        {viewValue: '6'},
        {viewValue: '8'}
      ];
    }
    if (event == 'Большая улица') {
      this.houses = [
        {viewValue: '7'},
        {viewValue: '7к1'},
        {viewValue: '7к2'},
        {viewValue: '15'},
        {viewValue: '15к1'},
        {viewValue: '17'},
        {viewValue: '17к2'},
        {viewValue: '19'},
        {viewValue: '19к2'},
        {viewValue: '90'},
        {viewValue: '90к1'},
        {viewValue: '92'},
        {viewValue: '94'},
        {viewValue: '94к1'},
        {viewValue: '100'},
        {viewValue: '102'},
        {viewValue: '102к1'}
      ];
    }
    if (event == 'Бульвар Оптимистов проезд') {
      this.houses = [
        {viewValue: '12'}
      ];
    }
    if (event == 'Зелёная улица') {
      this.houses = [
        {viewValue: '17'},
        {viewValue: '19'},
        {viewValue: '21'},
        {viewValue: '23'}
      ];
    }
    if (event == 'Касимовское шоссе') {
      this.houses = [
        {viewValue: '5'},
        {viewValue: '7'},
        {viewValue: '7к1'},
        {viewValue: '12'},
        {viewValue: '14/9'},
        {viewValue: '38к1'},
        {viewValue: '40к1'},
        {viewValue: '40к2'},
        {viewValue: '42'},
        {viewValue: '42к1'},
        {viewValue: '44'},
        {viewValue: '44к1'}
      ];
    }
    if (event == 'Тимакова улица') {
      this.houses = [
        {viewValue: '2'},
        {viewValue: '4'},
        {viewValue: '6'},
        {viewValue: '6к1'},
        {viewValue: '6к2'},
        {viewValue: '8'},
        {viewValue: '8к1'},
        {viewValue: '10'}
      ];
    }
    if (event == 'Советской Армии улица') {
      this.houses = [
        {viewValue: '12'},
        {viewValue: '12к1'},
        {viewValue: '14'}
      ]
    }
    if (event == 'Васильевская улица') {
      this.houses = [
        {viewValue: '49'},
        {viewValue: '51'},
        {viewValue: '51к1'},
        {viewValue: '51к2'},
        {viewValue: '51к3'},
        {viewValue: '53'},
        {viewValue: '53к1'},
        {viewValue: '53к2'}
      ]
    }
    if (event == 'Васильевская проезд') {
      this.houses = [
        {viewValue: '5'},
        {viewValue: '7'},
        {viewValue: '10'}
      ]
    }
    if (event == 'Новосёлов улица') {
      this.houses = [
        {viewValue: '3'}
      ]
    }
  }

  callData: any = {
  };

  ngOnInit(): void {
  }

  // onClickCall(): void {
  //   this.callData = {
  //     "fullName": this.fullName,
  //     "birthDate": this.birthDate,
  //     "street": this.streetVal,
  //     "house": this.houseVal,
  //     "apartment": this.apartmentVal,
  //     "symptoms": this.symptoms,
  //     "arrivalDate": this.arrivalDate,
  //     "forChild": this.forChild
  //   };
  //   alert(name);
  //   console.log(this.callData);
  // }
  async onClickCall(): Promise<void> {
      try {
        if (this.toPerson == this.toMe){
          this.forChild = false;
        } else {
          this.forChild = true;
        }
        this.callData = {
          "fullName": this.fullName,
          "birthDate": this.birthDate,
          "street": this.streetVal,
          "house": this.houseVal,
          "apartment": this.apartmentVal,
          "symptoms": this.symptoms,
          "arrivalDate": this.arrivalDate,
          // "forChild": this.forChild
        };

        const body = {
          fullName: this.fullName,
          birthDate: this.birthDate.toString(),
          street: this.streetVal,
          house: this.houseVal,
          apartment: this.apartmentVal,
          symptoms: this.symptoms,
          arrivalDate: this.arrivalDate
        }

        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        };

        this.http
            .post<{id: number}>('/api/v1/appointment', body, options)
            .subscribe(response => {
                console.log(response);
                localStorage.setItem('id', response.id.toString());

                console.log(localStorage.getItem('id'));
            });
        // this.router.navigate(['/requestReqult']);

      } catch (err) {
      }
    
  }
}
