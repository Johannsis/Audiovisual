import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Marca } from 'src/app/modules/marca';
import { MarcaService } from '../marca.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.css']
})
export class CrearMarcaComponent implements OnInit {

  marcaForm: FormGroup;
  arrEstado = [
    {
      value: true,
      estatus: 'Activo'
    },
    {
      value: false,
      estatus: 'Inactivo'
    },
  ];
  constructor(private fb: FormBuilder, private marcaService: MarcaService) {
    this.marcaForm = this.fb.group({
      NOMBRE: ['', Validators.required],
      ESTADO: ['', Validators.required]
    })
  }

  agregarMarca() {
    const marca: Marca = {
      NOMBRE: this.marcaForm.get('NOMBRE')?.value,
      ESTADO: this.marcaForm.get('ESTADO')?.value == "true"
    };
    this.marcaService.crearMarca(marca).subscribe(
      (res) => {
        Swal.fire(
          'Éxito',
          'Marca creada',
          'success'
        );
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    );
    console.log(marca);
  }

  ngOnInit(): void {
  }

}
