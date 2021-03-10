import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoEquipoComponent } from './listar-tipo-equipo.component';

describe('ListarTipoEquipoComponent', () => {
  let component: ListarTipoEquipoComponent;
  let fixture: ComponentFixture<ListarTipoEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
