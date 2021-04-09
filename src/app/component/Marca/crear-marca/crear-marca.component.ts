import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Marca } from 'src/app/modules/marca';
import { MarcaService } from '../marca.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.css'],
})
export class CrearMarcaComponent implements OnInit {
  marcaForm: FormGroup;
  arrEstado = [
    {
      value: true,
      estatus: 'Activo',
    },
    {
      value: false,
      estatus: 'Inactivo',
    },
  ];
  constructor(
    private fb: FormBuilder,
    private marcaService: MarcaService,
    private activeRoute: ActivatedRoute
  ) {
    this.marcaForm = this.fb.group({
      NOMBRE: ['', Validators.required],
      ESTADO: ['', Validators.required],
    });
  }

  agregarMarca() {
    const marca: Marca = {
      NOMBRE: this.marcaForm.get('NOMBRE')?.value,
      ESTADO: this.marcaForm.get('ESTADO')?.value == 'true',
    };
    if (this.funcion == 'Crear marca') {
      this.marcaService.crearMarca(marca).subscribe(
        (res) => {
          Swal.fire('Éxito', 'Marca creada', 'success');
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log(marca);
    } else {
      this.modificarMarca(this.marca.ID, marca);
    }
  }

  funcion: any;
  marca: any;

  obtenerMarca(ID: number) {
    this.marcaService.obtenerMarca(ID).subscribe(
      (res) => {
        this.marca = res;
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.marca);
  }

  modificarMarca(ID: number, Marca: Marca) {
    this.marcaService.actualizarMarca(ID, Marca).subscribe(
      (res) => {
        Swal.fire('Marca Actualizada', '', 'success');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (res) => {
        if (res.ID) {
          this.funcion = 'Actualizar marca';
          this.obtenerMarca(res.ID);
        } else {
          this.funcion = 'Crear marca';
        }
        console.log(this.funcion);
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
