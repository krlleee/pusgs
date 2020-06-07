import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentflightComponent } from './rentflight.component';

describe('RentflightComponent', () => {
  let component: RentflightComponent;
  let fixture: ComponentFixture<RentflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
