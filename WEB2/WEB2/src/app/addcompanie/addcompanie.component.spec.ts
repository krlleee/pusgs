import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanieComponent } from './addcompanie.component';

describe('AddcompanieComponent', () => {
  let component: AddcompanieComponent;
  let fixture: ComponentFixture<AddcompanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
