import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerdataComponent } from './passengerdata.component';

describe('PassengerdataComponent', () => {
  let component: PassengerdataComponent;
  let fixture: ComponentFixture<PassengerdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
