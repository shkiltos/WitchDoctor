import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsMapPageComponent } from './doctors-map-page.component';

describe('DoctorsMapPageComponent', () => {
  let component: DoctorsMapPageComponent;
  let fixture: ComponentFixture<DoctorsMapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsMapPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
