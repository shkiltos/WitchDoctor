import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialFormComponent } from './initial-form/initial-form.component';
import { MapTimerCustomerComponent } from './map-timer-customer/map-timer-customer.component';
import { RequestResultComponent } from './request-result/request-result.component';
import { DoctorsMapPageComponent } from './doctors-map-page/doctors-map-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'start', component: InitialFormComponent },
  { path: 'map', component: MapTimerCustomerComponent },
  { path: 'requestReqult', component: RequestResultComponent },
  { path: 'doctorsMap', component: DoctorsMapPageComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
