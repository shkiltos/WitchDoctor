import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public phoneInvalid = false;
  public wrongPasswordOrPhone = false;
  private formSubmitAttempt = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
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
    this.wrongPasswordOrPhone = false;
    if (this.form.valid) {
      try {
        const phone = this.form.get('phone')?.value;
        const password = this.form.get('password')?.value;
        const body = new HttpParams()
          .set('username', phone)
          .set('password', password);

        let options = {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };

        this.http
          .post('http://localhost:8080/login', body.toString(), options)
          .subscribe(response => {
            console.log(response);
          },
            error => {
              console.log(error);
              this.wrongPasswordOrPhone = true;
            });

        const options2 = {
          params: new HttpParams().set('phone', phone),
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        };
        this.http
          .get('http://localhost:8080/api/v1/users/role', options2)
          .subscribe(resp => {
            console.log(resp);
            if (resp == 'doc') {
              this.router.navigate(['/doctorsMap']);
            }
            if (resp == 'patient') {
              this.router.navigate(['/start']);
            }
          },
            error => console.log(error));

      } catch (err) {
        this.router.navigate(['/login']);

        this.phoneInvalid = true;
      }
    } else {
      this.router.navigate(['/login']);

      this.formSubmitAttempt = true;
    }
  }
}
