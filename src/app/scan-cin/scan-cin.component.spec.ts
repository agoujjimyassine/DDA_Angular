import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanCinComponent } from './scan-cin.component';

describe('ScanCinComponent', () => {
  let component: ScanCinComponent;
  let fixture: ComponentFixture<ScanCinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanCinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanCinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
