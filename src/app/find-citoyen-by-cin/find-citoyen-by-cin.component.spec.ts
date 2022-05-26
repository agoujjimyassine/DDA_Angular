import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCitoyenByCinComponent } from './find-citoyen-by-cin.component';

describe('FindCitoyenByCinComponent', () => {
  let component: FindCitoyenByCinComponent;
  let fixture: ComponentFixture<FindCitoyenByCinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCitoyenByCinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCitoyenByCinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
