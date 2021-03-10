import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTecnologiaConexionComponent } from './listar-tecnologia-conexion.component';

describe('ListarTecnologiaConexionComponent', () => {
  let component: ListarTecnologiaConexionComponent;
  let fixture: ComponentFixture<ListarTecnologiaConexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTecnologiaConexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTecnologiaConexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
