import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoEquipoComponent } from './crear-tipo-equipo.component';

describe('CrearTipoEquipoComponent', () => {
  let component: CrearTipoEquipoComponent;
  let fixture: ComponentFixture<CrearTipoEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
