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
    {viewValue: 'Новосёлов улица'}
  ];

  houses: any[] = [
    {viewValue: '1'},
    {viewValue: '2'},
    {viewValue: '3'},
  ];

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
            .post('/api/v1/appointment', body, options)
            .subscribe(response => {
                console.log(response);
            });
        // this.router.navigate(['/requestReqult']);

      } catch (err) {
      }
    
  }
}
