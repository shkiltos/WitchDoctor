import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InitialFormComponent } from './initial-form/initial-form.component';
import { RequestResultComponent } from './request-result/request-result.component';
import { MapTimerCustomerComponent } from './map-timer-customer/map-timer-customer.component';
import { DoctorsMapPageComponent } from './doctors-map-page/doctors-map-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialFormComponent,
    RequestResultComponent,
    MapTimerCustomerComponent,
    DoctorsMapPageComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
