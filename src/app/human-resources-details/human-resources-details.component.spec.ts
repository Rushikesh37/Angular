import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesDetailsComponent } from './human-resources-details.component';

describe('HumanResourcesDetailsComponent', () => {
  let component: HumanResourcesDetailsComponent;
  let fixture: ComponentFixture<HumanResourcesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanResourcesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourcesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
