import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoEquipo } from 'src/app/modules/tipo_equipo';
import Swal from 'sweetalert2';
import { TipoEquipoService } from '../tipo-equipo.service';

@Component({
  selector: 'app-crear-tipo-equipo',
  templateUrl: './crear-tipo-equipo.component.html',
  styleUrls: ['./crear-tipo-equipo.component.css']
})
export class CrearTipoEquipoComponent implements OnInit {

  tipoEquipoForm: FormGroup;
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

  constructor(private fb: FormBuilder, private tipoEquipoService: TipoEquipoService) {
    this.tipoEquipoForm = this.fb.group({
      descripcion: ['', Validators.required],
      estado: ['', Validators.required]
    })
   }

   agregarTipoEquipo() {
     const tipoEquipo: TipoEquipo = {
       DESCRIPCION: this.tipoEquipoForm.get('descripcion')?.value,
       ESTADO: this.tipoEquipoForm.get('estado')?.value
     };
     this.tipoEquipoService.crearTipoEquipo(tipoEquipo).subscribe(
       (res) => {
         Swal.fire(
           'Exito',
           'Marca creada',
           'success'
         );
         console.log(res)
       },
       (err) => {
         console.log(err)
       }
     );
     console.log(tipoEquipo);
   }

  ngOnInit(): void {
  }

}
