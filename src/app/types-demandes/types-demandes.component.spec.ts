import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesDemandesComponent } from './types-demandes.component';

describe('TypesDemandesComponent', () => {
  let component: TypesDemandesComponent;
  let fixture: ComponentFixture<TypesDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
