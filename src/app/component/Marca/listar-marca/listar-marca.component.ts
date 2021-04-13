import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-listar-marca',
  templateUrl: './listar-marca.component.html',
  styleUrls: ['./listar-marca.component.css'],
})
export class ListarMarcaComponent implements OnInit {
  marcas: any;
  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.obtenerMarcas();
  }

  filterData: any[] = [];

  categories: any[] = [
    { value: 'NOMBRE', name: 'Nombre' },
    { value: 'ESTADO ACTIVO', name: 'Activo' },
    { value: 'ESTADO INACTIVO', name: 'Inactivo' },
  ];
  categorySelected: any = null;
  disableSearch: boolean = false;

  changeState(): void {
    if (this.categorySelected == 'ESTADO ACTIVO') {
      this.filterData = this.marcas.filter((element) => element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'ESTADO INACTIVO') {
      this.filterData = this.marcas.filter((element) => !element.ESTADO);
      this.disableSearch = true;
    } else {
      this.filterData = this.marcas;
      this.disableSearch = false;
    }
  }

  search(term: string) {
    if (!term) {
      this.filterData = this.marcas;
    } else {
      switch (this.categorySelected) {
        case 'NOMBRE':
          this.filterData = this.marcas.filter((element) =>
            element.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ESTADO ACTIVO':
          this.filterData = this.marcas.filter((element) => element.ESTADO);
          break;
        case 'ESTADO INACTIVO':
          this.filterData = this.marcas.filter((element) => !element.ESTADO);
          break;
        default:
          this.filterData = this.marcas.filter((element) =>
            element.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
      }
    }
  }

  obtenerMarcas() {
    this.marcaService.obtenerMarcas().subscribe(
      (res) => {
        this.marcas = res;
        this.filterData = this.marcas;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarMarca(id: number) {
    Swal.fire({
      title: 'Quiere eliminar la marca?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue',
    }).then((result) => {
      if (result.isConfirmed) {
        this.marcaService.eliminarMarca(id).subscribe(
          (res) => {
            Swal.fire('Eliminado', '', 'success');
            this.obtenerMarcas();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }
}
