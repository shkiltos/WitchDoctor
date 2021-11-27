import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
        let body = new URLSearchParams();
        body.set('fullName', this.fullName);
        body.set('birthDate', this.birthDate);
        body.set('street', this.streetVal);
        body.set('house', this.houseVal);
        body.set('apartment', this.apartmentVal);
        body.set('symptoms', this.symptoms);
        body.set('arrivalDate', this.arrivalDate);
        body.set('forChild', this.forChild.toString());

        // let options = {
        //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        // };

        this.http
            .post('localhost:8080/api/v1/appointment', body.toString())
            .subscribe(response => {
                console.log(response);
            });
        this.router.navigate(['/requestReqult']);

      } catch (err) {
      }
    
  }
}
