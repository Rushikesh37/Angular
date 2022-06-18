import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTechnologyDetailsComponent } from './information-technology-details.component';

describe('InformationTechnologyDetailsComponent', () => {
  let component: InformationTechnologyDetailsComponent;
  let fixture: ComponentFixture<InformationTechnologyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationTechnologyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationTechnologyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
