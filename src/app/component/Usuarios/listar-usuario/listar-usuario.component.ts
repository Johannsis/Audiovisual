import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: any;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  filterData: any[] = [];

  categories: any[] = [
    { value: 'NOMBRE', name: 'Nombre' },
    { value: 'APELLIDO', name: 'Apellido' },
    { value: 'CEDULA', name: 'Cedula' },
    { value: 'MATRICULA', name: 'Matricula' },
    { value: 'ID_TIPO_USUARIO', name: 'Tipo Usuario' },
    { value: 'ESTADO ACTIVO', name: 'Activo' },
    { value: 'ESTADO INACTIVO', name: 'Inactivo' }
  ];
  categorySelected: any = null;
  disableSearch: boolean = false;

  changeState(): void {
    if (this.categorySelected == 'ESTADO ACTIVO') {
      this.filterData = this.usuarios.filter((element) => element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'ESTADO INACTIVO') {
      this.filterData = this.usuarios.filter((element) => !element.ESTADO);
      this.disableSearch = true;
    } else {
      this.filterData = this.usuarios;
      this.disableSearch = false;
    }
  }

  search(term: string) {
    if (!term) {
      this.filterData = this.usuarios;
    } else {
      switch (this.categorySelected) {
        case 'NOMBRE':
          this.filterData = this.usuarios.filter((element) =>
            element.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'APELLIDO':
          this.filterData = this.usuarios.filter((element) =>
            element.APELLIDO.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'CEDULA':
          this.filterData = this.usuarios.filter((element) =>
            element.CEDULA.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'MATRICULA':
          this.filterData = this.usuarios.filter((element) =>
            element.MATRICULA.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ID_TIPO_USUARIO':
          this.filterData = this.usuarios.filter((element) =>
            element.ID_TIPO_USUARIO.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ESTADO ACTIVO':
          this.filterData = this.usuarios.filter((element) => element.ESTADO);
          break;
        case 'ESTADO INACTIVO':
          this.filterData = this.usuarios.filter((element) => !element.ESTADO);
          break;
        default:
          this.filterData = this.usuarios.filter((element) =>
            element.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
      }
    }
  }

  obtenerUsuarios(){
    this.usuarioService.obtenerUsuarios().subscribe(
      (res)=>{
        this.usuarios = res;
        this.filterData = this.usuarios;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  eliminarUsuario(id:number){
    Swal.fire({
      title: 'Quiere eliminar el usuario?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminarUsuario(id).subscribe(
          (res)=>{
            Swal.fire('Eliminado!', '', 'success')
            this.obtenerUsuarios();
          },
          (err)=>{
            console.log(err);
          }
        )
      }
    })
  }
}
