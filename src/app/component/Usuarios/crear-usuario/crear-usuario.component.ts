import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/modules/usuarios';
import Swal from 'sweetalert2';
import { TipoUsuarioService } from '../../Tipo Usuario/tipo-usuario.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
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


  tipoUsuario: any;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private tipoUsuarioService: TipoUsuarioService,
  ) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      matricula: ['', Validators.required],
      id_tipo_usuario: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  test(que: any) {
    console.log(que);
  }

  obtenerTipoUsuarios(){
    this.tipoUsuarioService.obtenerTiposUsuario().subscribe(
      (res)=>{
        this.tipoUsuario = res;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  agregarUsuario() {
    const usuario: Usuarios = {
      NOMBRE: this.usuarioForm.get('nombre')?.value,
      APELLIDO: this.usuarioForm.get('apellido')?.value,
      CEDULA: this.usuarioForm.get('cedula')?.value,
      MATRICULA: this.usuarioForm.get('matricula')?.value,
      ID_TIPO_USUARIO: this.usuarioForm.get('id_tipo_usuario')?.value,
      ESTADO: this.usuarioForm.get('ESTADO')?.value == "true",
    };
    this.usuarioService.crearUsuario(usuario).subscribe(
      (res) => {
        Swal.fire(
          'Exito',
          'Usuario creado',
          'success'
        );
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    );
    console.log(usuario);
  }

  ngOnInit(): void {
    this.obtenerTipoUsuarios();
  }
}
