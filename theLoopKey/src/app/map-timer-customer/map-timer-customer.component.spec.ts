import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTimerCustomerComponent } from './map-timer-customer.component';

describe('MapTimerCustomerComponent', () => {
  let component: MapTimerCustomerComponent;
  let fixture: ComponentFixture<MapTimerCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTimerCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTimerCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
