import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCitoyenComponent } from './form-citoyen.component';

describe('FormCitoyenComponent', () => {
  let component: FormCitoyenComponent;
  let fixture: ComponentFixture<FormCitoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCitoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
