import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css'],
})
export class ListarEmpleadoComponent implements OnInit {
  constructor(private empleadoService: EmpleadoService) {}

  empleados: any;

  obtenerEmpleados() {
    this.empleadoService.obtenerEmpleados().subscribe(
      (res) => {
        this.empleados = res;
        this.filterData = this.empleados;
        console.log(this.empleados);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  filterData: any[] = [];
  estado: any;

  categories: any[] = [
    { value: 'NOMBRE', name: 'Nombre y apellido' },
    { value: 'CEDULA', name: 'Cedula' },
    { value: 'EMAIL', name: 'Correo' },
    { value: 'TANDA', name: 'Tanda' },
    { value: 'FECHA_INGRESO', name: 'Fecha de ingreso' },
    { value: 'ESTADO ACTIVO', name: 'Activo' },
    { value: 'ESTADO INACTIVO', name: 'Inactivo' },
  ];
  categorySelected: any = null;
  disableSearch: boolean = false;
  initialDate: any = new Date().toISOString();
  finalDate: any = new Date().toISOString();

  parseIsoDatetime(dtstr) {
    var dt = dtstr.split(/[: T-]/).map(parseFloat);
    return new Date(
      dt[0],
      dt[1] - 1,
      dt[2],
      dt[3] || 0,
      dt[4] || 0,
      dt[5] || 0,
      0
    );
  }

  changeState(): void {
    if (this.categorySelected == 'ESTADO ACTIVO') {
      this.filterData = this.empleados.filter((element) => element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'ESTADO INACTIVO') {
      this.filterData = this.empleados.filter((element) => !element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'FECHA_INGRESO') {
      this.filterData = this.empleados.filter((element) => {
        return (this.parseIsoDatetime(element.FECHA_INGRESO) >= this.parseIsoDatetime(this.initialDate) &&
                this.parseIsoDatetime(element.FECHA_INGRESO) <= this.parseIsoDatetime(this.finalDate));
      });
      this.disableSearch = true;
    } else {
      this.filterData = this.empleados;
      this.disableSearch = false;
    }
  }

  search(term: string) {
    if (!term) {
      this.filterData = this.empleados;
    } else {
      switch (this.categorySelected) {
        case 'NOMBRE':
          this.filterData = this.empleados.filter((element) =>
            element.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'CEDULA':
          this.filterData = this.empleados.filter((element) =>
            element.CEDULA.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'EMAIL':
          this.filterData = this.empleados.filter((element) =>
            element.EMAIL.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'TANDA':
          this.filterData = this.empleados.filter((element) =>
            element.TANDA.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'FECHA_INGRESO':
          this.filterData = this.empleados.filter((element) =>
            element.FECHA_INGRESO.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ESTADO ACTIVO':
          this.filterData = this.empleados.filter((element) => element.ESTADO);
          break;
        case 'ESTADO INACTIVO':
          this.filterData = this.empleados.filter((element) => !element.ESTADO);
          break;
        default:
          this.filterData = this.empleados.filter((element) =>
            element.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
      }
    }
  }

  eliminarEmpleado(id: number) {
    Swal.fire({
      title: 'Quiere eliminar el equipo?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue',
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.eliminarEmpleado(id).subscribe(
          (res) => {
            Swal.fire('Eliminado!', '', 'success');
            this.obtenerEmpleados();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }
}
