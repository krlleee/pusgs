import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Company2Component } from './company2.component';

describe('Company2Component', () => {
  let component: Company2Component;
  let fixture: ComponentFixture<Company2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Company2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Company2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
