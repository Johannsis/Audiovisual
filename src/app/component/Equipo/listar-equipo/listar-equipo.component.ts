import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-listar-equipo',
  templateUrl: './listar-equipo.component.html',
  styleUrls: ['./listar-equipo.component.css'],
})
export class ListarEquipoComponent implements OnInit {
  equipos: any;
  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  filterData: any[] = [];
  estado: any;

  categories: any[] = [
    { value: 'DESCRIPCION', name: 'Descripcion' },
    { value: 'NUMERO_SERIAL', name: 'Numero Serial' },
    { value: 'ID_MARCA', name: 'Marca' },
    { value: 'ID_MODELO', name: 'Modelo' },
    { value: 'ID_TIPO_EQUIPO', name: 'Tipo Equipo' },
    { value: 'ID_TECNOLOGIA_CONEXION', name: 'Tipo Tecnologia' },
    { value: 'ESTADO ACTIVO', name: 'Activo' },
    { value: 'ESTADO INACTIVO', name: 'Inactivo' },
  ];
  categorySelected: any = null;
  disableSearch: boolean = false;

  changeState(): void {
    if (this.categorySelected == 'ESTADO ACTIVO') {
      this.filterData = this.equipos.filter((element) => element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'ESTADO INACTIVO') {
      this.filterData = this.equipos.filter((element) => !element.ESTADO);
      this.disableSearch = true;
    } else {
      this.filterData = this.equipos;
      this.disableSearch = false;
    }
  }

  search(term: string) {
    if (!term) {
      this.filterData = this.equipos;
    } else {
      switch (this.categorySelected) {
        case 'DESCRIPCION':
          this.filterData = this.equipos.filter((element) =>
            element.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'NUMERO_SERIAL':
          this.filterData = this.equipos.filter((element) =>
            element.NUMERO_SERIAL.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ID_MARCA':
          this.filterData = this.equipos.filter((element) =>
            element.ID_MARCA.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ID_MODELO':
          this.filterData = this.equipos.filter((element) =>
            element.ID_MODELO.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ID_TIPO_EQUIPO':
          this.filterData = this.equipos.filter((element) =>
            element.ID_TIPO_EQUIPO.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ID_TECNOLOGIA_CONEXION':
          this.filterData = this.equipos.filter((element) =>
            element.ID_TECNOLOGIA_CONEXION.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ESTADO ACTIVO':
          this.filterData = this.equipos.filter((element) => element.ESTADO);
          break;
        case 'ESTADO INACTIVO':
          this.filterData = this.equipos.filter((element) => !element.ESTADO);
          break;
        default:
          this.filterData = this.equipos.filter((element) =>
            element.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
      }
    }
  }

  obtenerEquipos() {
    this.equipoService.obtenerEquipos().subscribe(
      (res) => {
        this.equipos = res;
        this.filterData = this.equipos;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarEquipo(id: number) {
    Swal.fire({
      title: 'Quiere eliminar el equipo?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue',
    }).then((result) => {
      if (result.isConfirmed) {
        this.equipoService.eliminarEquipo(id).subscribe(
          (res) => {
            Swal.fire('Eliminado!', '', 'success');
            this.obtenerEquipos();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }
}
