import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsMapComponent } from './doctors-map.component';

describe('DoctorsMapComponent', () => {
  let component: DoctorsMapComponent;
  let fixture: ComponentFixture<DoctorsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
