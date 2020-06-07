import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcompaniesComponent } from './carcompanies.component';

describe('CarcompaniesComponent', () => {
  let component: CarcompaniesComponent;
  let fixture: ComponentFixture<CarcompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarcompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
