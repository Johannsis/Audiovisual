import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRentaComponent } from './crear-renta.component';

describe('CrearRentaComponent', () => {
  let component: CrearRentaComponent;
  let fixture: ComponentFixture<CrearRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
