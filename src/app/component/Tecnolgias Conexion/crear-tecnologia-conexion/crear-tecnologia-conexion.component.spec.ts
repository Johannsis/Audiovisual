import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTecnologiaConexionComponent } from './crear-tecnologia-conexion.component';

describe('CrearTecnologiaConexionComponent', () => {
  let component: CrearTecnologiaConexionComponent;
  let fixture: ComponentFixture<CrearTecnologiaConexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTecnologiaConexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTecnologiaConexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
