import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoUsuarioComponent } from './listar-tipo-usuario.component';

describe('ListarTipoUsuarioComponent', () => {
  let component: ListarTipoUsuarioComponent;
  let fixture: ComponentFixture<ListarTipoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
