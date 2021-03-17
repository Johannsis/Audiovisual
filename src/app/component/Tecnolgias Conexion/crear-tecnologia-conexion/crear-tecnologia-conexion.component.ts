import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private tipoTecnologiaService: TipoTecnologiaService) {
    this.tipoTecnologiaForm = this.fb.group({
      descripcion: ['', Validators.required],
      estado: ['', Validators.required]
    })
   }

   test(que: any) {
    console.log(que);
  }

   agregarTipoTecnologia(){
     const tipoTecnologia: TecnologiaConexion = {
       DESCRIPCION: this.tipoTecnologiaForm.get('descripcion')?.value,
       ESTADO: this.tipoTecnologiaForm.get('estado')?.value
     };
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
     console.log(tipoTecnologia)
   }

  ngOnInit(): void {
  }

}
