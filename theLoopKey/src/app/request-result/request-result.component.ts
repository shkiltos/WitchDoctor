import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-request-result',
  templateUrl: './request-result.component.html',
  styleUrls: ['./request-result.component.css']
})
export class RequestResultComponent implements OnInit {

  constructor(
      private http: HttpClient
    ) { }

  queueNumber: number = 5051;

  ngOnInit(): void {
  }
  async onSubmit(): Promise<void> {
      try {

        await this.http
            .get('localhost:8080/api/v1/users')
            .subscribe((data: any) => this.queueNumber = data.queueNumber);
      } catch (err) {

      }
    
  }
}
