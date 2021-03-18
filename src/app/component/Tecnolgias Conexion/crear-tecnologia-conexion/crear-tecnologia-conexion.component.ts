import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TecnologiaConexion } from 'src/app/modules/technologias';
import Swal from 'sweetalert2';
import { TipoTecnologiaService } from '../tipo-tecnologia.service';

@Component({
  selector: 'app-crear-tecnologia-conexion',
  templateUrl: './crear-tecnologia-conexion.component.html',
  styleUrls: ['./crear-tecnologia-conexion.component.css']
})
export class CrearTecnologiaConexionComponent implements OnInit {

  tipoTecnologiaForm: FormGroup;
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

  constructor(private fb: FormBuilder, private tipoTecnologiaService: TipoTecnologiaService, private activeRoute: ActivatedRoute) {
    this.tipoTecnologiaForm = this.fb.group({
      descripcion: ['', Validators.required],
      estado: ['', Validators.required]
    })
  }

  test(que: any) {
    console.log(que);
  }

  agregarTipoTecnologia() {
    const tipoTecnologia: TecnologiaConexion = {
      DESCRIPCION: this.tipoTecnologiaForm.get('descripcion')?.value,
      ESTADO: this.tipoTecnologiaForm.get('estado')?.value == "true"
    };
    if (this.funcion == "Crear Tipo Tecnologia") {

      this.tipoTecnologiaService.crearTipoTecnologia(tipoTecnologia).subscribe(
        (res) => {
          Swal.fire(
            'Exito',
            'Tecnologia creada',
            'success'
          );
          console.log(res)
        },
        (err) => {
          console.log(err)
        }
      );
    } else {
      this.actualizarTipoTecnologia(this.tipoTecnologia.ID, tipoTecnologia);
    }

    console.log(tipoTecnologia)
  }

  funcion: any;
  tipoTecnologia: any;
  obtenerTecnologia(ID: number) {
    this.tipoTecnologiaService.obtenerTipoTecnologia(ID).subscribe(
      (res) => {

        this.tipoTecnologia = res;

      },
      err => {
        console.log(err);
      }
    )
  }
  actualizarTipoTecnologia(id: number, tecnologia: TecnologiaConexion) {
    this.tipoTecnologiaService.actualizarTipoTecnologia(id, tecnologia).subscribe(
      (res) => {
        Swal.fire(
          'Exito',
          'Tecnologia actualizada',
          'success'
        );
      },
      err => {
        console.log(err);
      }
    )
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (res) => {
        if (res.ID) {
          this.funcion = "Actualizar Tipo Tecnologia";
          this.obtenerTecnologia(res.ID);
        } else {
          this.funcion = "Crear Tipo Tecnologia"
        }
        console.log(this.funcion);
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
