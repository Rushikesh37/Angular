import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMngComponent } from './country-mng.component';

describe('CountryMngComponent', () => {
  let component: CountryMngComponent;
  let fixture: ComponentFixture<CountryMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryMngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
