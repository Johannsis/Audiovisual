import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoUsuarios } from 'src/app/modules/tipo_usuario';
import Swal from 'sweetalert2';
import { TipoUsuarioService } from '../tipo-usuario.service';

@Component({
  selector: 'app-crear-tipo-usuario',
  templateUrl: './crear-tipo-usuario.component.html',
  styleUrls: ['./crear-tipo-usuario.component.css']
})
export class CrearTipoUsuarioComponent implements OnInit {

  tipoUsuarioForm: FormGroup;
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

  constructor(private fb: FormBuilder, private tipoUsuarioService: TipoUsuarioService) {
    this.tipoUsuarioForm = this.fb.group({
      descripcion: ['', Validators.required],
      estado: ['', Validators.required]
    })
   }

   agregarTipoUsuario() {
     const tipoUsuario: TipoUsuarios = {
       DESCRIPCION: this.tipoUsuarioForm.get('descripcion')?.value,
       ESTADO: this.tipoUsuarioForm.get('estado')?.value
     };
     this.tipoUsuarioService.crearTipoUsuario(tipoUsuario).subscribe(
       (res) => {
         Swal.fire(
           'Exito',
           'Tipo usuario creado',
           'success'
         );
         console.log(res)
       },
       (err) => {
         console.log(err)
       }
     );
     console.log(tipoUsuario);
   }

  ngOnInit(): void {
  }

}
