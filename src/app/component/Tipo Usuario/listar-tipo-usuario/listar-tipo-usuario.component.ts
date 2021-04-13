import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TipoUsuarioService } from '../tipo-usuario.service';

@Component({
  selector: 'app-listar-tipo-usuario',
  templateUrl: './listar-tipo-usuario.component.html',
  styleUrls: ['./listar-tipo-usuario.component.css']
})
export class ListarTipoUsuarioComponent implements OnInit {

  tipoUsuario: any;

  constructor(private tipoUsuarioService: TipoUsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  filterData: any[] = [];
  estado: any;

  categories: any[] = [
    { value: 'DESCRIPCION', name: 'Descripcion' },
    { value: 'ESTADO ACTIVO', name: 'Activo' },
    { value: 'ESTADO INACTIVO', name: 'Inactivo' },
  ];
  categorySelected: any = null;
  disableSearch: boolean = false;

  changeState(): void {
    if (this.categorySelected == 'ESTADO ACTIVO') {
      this.filterData = this.tipoUsuario.filter((element) => element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'ESTADO INACTIVO') {
      this.filterData = this.tipoUsuario.filter((element) => !element.ESTADO);
      this.disableSearch = true;
    } else {
      this.filterData = this.tipoUsuario;
      this.disableSearch = false;
    }
  }

  search(term: string) {
    if (!term) {
      this.filterData = this.tipoUsuario;
    } else {
      switch (this.categorySelected) {
        case 'DESCRIPCION':
          this.filterData = this.tipoUsuario.filter((element) =>
            element.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ESTADO ACTIVO':
          this.filterData = this.tipoUsuario.filter((element) => element.ESTADO);
          break;
        case 'ESTADO INACTIVO':
          this.filterData = this.tipoUsuario.filter((element) => !element.ESTADO);
          break;
        default:
          this.filterData = this.tipoUsuario.filter((element) =>
            element.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
      }
    }
  }

  obtenerUsuarios(){
    this.tipoUsuarioService.obtenerTiposUsuario().subscribe(
      (res) =>{
        this.tipoUsuario = res;
        this.filterData = this.tipoUsuario;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  eliminarUsuario(id:number){
    Swal.fire({
      title: 'Quiere eliminar la marca?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoUsuarioService.eliminarTipoUsuario(id).subscribe(
          (res) => {
            Swal.fire('Eliminado', '', 'success');
            this.obtenerUsuarios();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

}
