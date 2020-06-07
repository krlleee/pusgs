import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredcardsComponent } from './filteredcards.component';

describe('FilteredcardsComponent', () => {
  let component: FilteredcardsComponent;
  let fixture: ComponentFixture<FilteredcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
