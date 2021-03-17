import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modelo } from 'src/app/modules/modelo';
import Swal from 'sweetalert2';
import { MarcaService } from '../../Marca/marca.service';
import { ModeloService } from '../modelo.service';

@Component({
  selector: 'app-crear-modelo',
  templateUrl: './crear-modelo.component.html',
  styleUrls: ['./crear-modelo.component.css'],
})
export class CrearModeloComponent implements OnInit {
  modeloForm: FormGroup;
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

  marcas: any;

  constructor(
    private fb: FormBuilder,
    private modeloService: ModeloService,
    private marcaService: MarcaService
  ) {
    this.modeloForm = this.fb.group({
      NOMBRE: ['', Validators.required],
      ID_MARCA: ['', Validators.required],
      ESTADO: ['', Validators.required]
    });
  }

  test(que: any) {
    console.log(que);
  }

  obtenerMarcas() {
    this.marcaService.obtenerMarcas().subscribe(
      (res) => {
        this.marcas = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  agregarModelo() {
    const modelo: Modelo = {
      NOMBRE: this.modeloForm.get('NOMBRE')?.value,
      ID_MARCA: this.modeloForm.get('ID_MARCA')?.value,
      ESTADO: this.modeloForm.get('ESTADO')?.value == "true",
    };
    this.modeloService.crearModelo(modelo).subscribe(
      (res) => {
        Swal.fire('Exito', 'Modelo creado', 'success');
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(modelo);
  }

  ngOnInit(): void {
    this.obtenerMarcas();
  }
}
