import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCitoyenComponent } from './final-citoyen.component';

describe('FinalCitoyenComponent', () => {
  let component: FinalCitoyenComponent;
  let fixture: ComponentFixture<FinalCitoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCitoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
