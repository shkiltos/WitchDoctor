import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InitialFormComponent } from './initial-form/initial-form.component';
import { RequestResultComponent } from './request-result/request-result.component';
import { MapTimerCustomerComponent } from './map-timer-customer/map-timer-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialFormComponent,
    RequestResultComponent,
    MapTimerCustomerComponent
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
