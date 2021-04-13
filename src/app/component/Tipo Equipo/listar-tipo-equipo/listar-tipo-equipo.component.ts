import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TipoEquipoService } from '../tipo-equipo.service';

@Component({
  selector: 'app-listar-tipo-equipo',
  templateUrl: './listar-tipo-equipo.component.html',
  styleUrls: ['./listar-tipo-equipo.component.css']
})
export class ListarTipoEquipoComponent implements OnInit {

  tipoEquipo: any;

  constructor(private tipoEquipoService: TipoEquipoService) { }

  ngOnInit(): void {
    this.obtenerTipoEquipo();
  }

  filterData: any[] = [];

  categories: any[] = [
    { value: 'DESCRIPCION', name: 'Tipo Equipo' },
    { value: 'ESTADO ACTIVO', name: 'Activo' },
    { value: 'ESTADO INACTIVO', name: 'Inactivo' },
  ];
  categorySelected: any = null;
  disableSearch: boolean = false;

  changeState(): void {
    if (this.categorySelected == 'ESTADO ACTIVO') {
      this.filterData = this.tipoEquipo.filter((element) => element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'ESTADO INACTIVO') {
      this.filterData = this.tipoEquipo.filter((element) => !element.ESTADO);
      this.disableSearch = true;
    } else {
      this.filterData = this.tipoEquipo;
      this.disableSearch = false;
    }
  }

  search(term: string) {
    if (!term) {
      this.filterData = this.tipoEquipo;
    } else {
      switch (this.categorySelected) {
        case 'DESCRIPCION':
          this.filterData = this.tipoEquipo.filter((element) =>
            element.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ESTADO ACTIVO':
          this.filterData = this.tipoEquipo.filter((element) => element.ESTADO);
          break;
        case 'ESTADO INACTIVO':
          this.filterData = this.tipoEquipo.filter((element) => !element.ESTADO);
          break;
        default:
          this.filterData = this.tipoEquipo.filter((element) =>
            element.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
      }
    }
  }

  obtenerTipoEquipo(){
    this.tipoEquipoService.obtenerTiposEquipo().subscribe(
      (res)=>{
        this.tipoEquipo = res;
        this.filterData = this.tipoEquipo;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  eliminarTipoEquipo(id:number){
    Swal.fire({
      title: 'Quiere eliminar el tipo de equipo?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoEquipoService.eliminarTipoEquipo(id).subscribe(
          (res) => {
            Swal.fire('Eliminado', '', 'success');
            this.obtenerTipoEquipo();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

}
