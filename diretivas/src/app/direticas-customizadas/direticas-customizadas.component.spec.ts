import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireticasCustomizadasComponent } from './direticas-customizadas.component';

describe('DireticasCustomizadasComponent', () => {
  let component: DireticasCustomizadasComponent;
  let fixture: ComponentFixture<DireticasCustomizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireticasCustomizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireticasCustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
