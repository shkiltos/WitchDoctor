import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public phoneInvalid = false;
  private formSubmitAttempt = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {

    this.form = this.fb.group({
      phone: ['', Validators.pattern("[0-9]{11}")],
      password: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {

  }

  async onSubmit(): Promise<void> {
    this.phoneInvalid = false;
    this.formSubmitAttempt = false;
    
    if (this.form.valid) {
      try {
        const phone = this.form.get('phone')?.value;
        const password = this.form.get('password')?.value;
        let body = new URLSearchParams();
        body.set('phone', phone);
        body.set('password', password);

        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };

        this.http
            .post('localhost:8080/login', body.toString(), options)
            .subscribe(response => {
                console.log(response);
            });
      } catch (err) {
        this.phoneInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}