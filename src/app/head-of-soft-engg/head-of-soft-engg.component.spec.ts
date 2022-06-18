import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfSoftEnggComponent } from './head-of-soft-engg.component';

describe('HeadOfSoftEnggComponent', () => {
  let component: HeadOfSoftEnggComponent;
  let fixture: ComponentFixture<HeadOfSoftEnggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfSoftEnggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfSoftEnggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
