import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesDemandesResponsableComponent } from './types-demandes-responsable.component';

describe('TypesDemandesResponsableComponent', () => {
  let component: TypesDemandesResponsableComponent;
  let fixture: ComponentFixture<TypesDemandesResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesDemandesResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesDemandesResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
