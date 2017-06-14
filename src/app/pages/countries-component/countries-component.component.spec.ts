import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesComponentComponent } from './countries-component.component';

describe('CountriesComponentComponent', () => {
  let component: CountriesComponentComponent;
  let fixture: ComponentFixture<CountriesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
