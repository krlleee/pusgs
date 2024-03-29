import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Company1Component } from './company1.component';

describe('Company1Component', () => {
  let component: Company1Component;
  let fixture: ComponentFixture<Company1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Company1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Company1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
