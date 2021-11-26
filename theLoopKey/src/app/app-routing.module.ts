import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialFormComponent } from './initial-form/initial-form.component';
import { MapTimerCustomerComponent } from './map-timer-customer/map-timer-customer.component';
import { RequestResultComponent } from './request-result/request-result.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { DoctorsMapPageComponent } from './doctors-map-page/doctors-map-page.component';


const routes: Routes = [
  { path: 'start', component: InitialFormComponent },
  { path: 'map', component: MapTimerCustomerComponent },
  { path: 'requestReqult', component: RequestResultComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: 'doctorsMap', component: DoctorsMapPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
