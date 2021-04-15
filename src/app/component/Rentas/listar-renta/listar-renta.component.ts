import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { RentaService } from '../renta.service';
import 'jspdf-autotable';
declare var jsPDF: any;
@Component({
  selector: 'app-listar-renta',
  templateUrl: './listar-renta.component.html',
  styleUrls: ['./listar-renta.component.css'],
})
export class ListarRentaComponent implements OnInit {
  rentas: any;

  constructor(private rentaService: RentaService) {}

  ngOnInit(): void {
    this.obtenerRentas();
  }

  filterData: any[] = [];

  categories: any[] = [
    { value: 'NUMERO_PRESTAMO', name: 'Numero Prestamo' },
    { value: 'ID_EMPLEADO', name: 'Cedula Empleado' },
    { value: 'ID_EQUIPO', name: 'Nombre Equipo' },
    { value: 'ID_USUARIO', name: 'Matricula Usuario' },
    { value: 'FECHA_PRESTAMO', name: 'Fecha del prestamo' },
    { value: 'FECHA_DEVOLUCION', name: 'Fecha de la devolucion' },
    { value: 'COMENTARIO', name: 'Comentario' },
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
      this.filterData = this.rentas.filter((element) => element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'ESTADO INACTIVO') {
      this.filterData = this.rentas.filter((element) => !element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'FECHA_PRESTAMO') {
      this.filterData = this.rentas.filter((element) => {
        return (
          this.parseIsoDatetime(element.FECHA_PRESTAMO) >=
            this.parseIsoDatetime(this.initialDate) &&
          this.parseIsoDatetime(element.FECHA_PRESTAMO) <=
            this.parseIsoDatetime(this.finalDate)
        );
      });
      this.disableSearch = true;
    } else if (this.categorySelected == 'FECHA_DEVOLUCION') {
      this.filterData = this.rentas.filter((element) => {
        return (
          this.parseIsoDatetime(element.FECHA_DEVOLUCION) >=
            this.parseIsoDatetime(this.initialDate) &&
          this.parseIsoDatetime(element.FECHA_DEVOLUCION) <=
            this.parseIsoDatetime(this.finalDate)
        );
      });
      this.disableSearch = true;
    } else {
      this.filterData = this.rentas;
      this.disableSearch = false;
    }
  }

  search(term: string) {
    if (!term) {
      this.filterData = this.rentas;
    } else {
      switch (this.categorySelected) {
        case 'NUMERO_PRESTAMO':
          this.filterData = this.rentas.filter(
            (element) => (element.NUMERO_PRESTAMO + '').indexOf(term) > -1
          );
          break;
        case 'ID_EMPLEADO':
          this.filterData = this.rentas.filter((element) =>
            element.ID_EMPLEADO.CEDULA.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ID_EQUIPO':
          this.filterData = this.rentas.filter((element) =>
            element.ID_EQUIPO.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ID_USUARIO':
          this.filterData = this.rentas.filter((element) =>
            element.ID_USUARIO.MATRICULA.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'FECHA_PRESTAMO':
          this.filterData = this.rentas.filter((element) =>
            element.FECHA_PRESTAMO.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'FECHA_DEVOLUCION':
          this.filterData = this.rentas.filter((element) =>
            element.FECHA_DEVOLUCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'COMENTARIO':
          this.filterData = this.rentas.filter((element) =>
            element.COMENTARIO.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ESTADO ACTIVO':
          this.filterData = this.rentas.filter((element) => element.ESTADO);
          break;
        case 'ESTADO INACTIVO':
          this.filterData = this.rentas.filter((element) => !element.ESTADO);
          break;
        default:
          this.filterData = this.rentas.filter((element) =>
            element.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
      }
    }
  }

  obtenerRentas() {
    this.rentaService.obtenerRentas().subscribe(
      (res) => {
        this.rentas = res;
        this.filterData = this.rentas;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarRenta(id: number) {
    Swal.fire({
      title: 'Quiere retornar el articulo?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'green',
      denyButtonText: `No`,
      denyButtonColor: 'blue',
    }).then((result) => {
      if (result.isConfirmed) {
        this.rentaService.eliminarRenta(id).subscribe(
          (res) => {
            Swal.fire('Retornado!', '', 'success');
            this.obtenerRentas();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  @ViewChild('reportes') reportes: ElementRef;
  generarReportes() {
    const data = this.reportes.nativeElement;
    var edit = document.getElementById('edit');
    if(edit != null){
      edit.parentNode.removeChild(edit);
      console.log(data.innerHTML);
    }

    const doc = new jsPDF('p', 'pt', 'a4');

    doc.autoTable({
      theme: 'striped',
      html: data,
    });
    doc.save('Reportes de renta.pdf');
  }
}
