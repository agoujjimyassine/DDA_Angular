import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceCitoyenComponent } from './piece-citoyen.component';

describe('PieceCitoyenComponent', () => {
  let component: PieceCitoyenComponent;
  let fixture: ComponentFixture<PieceCitoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceCitoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
