import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRentaComponent } from './listar-renta.component';

describe('ListarRentaComponent', () => {
  let component: ListarRentaComponent;
  let fixture: ComponentFixture<ListarRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
