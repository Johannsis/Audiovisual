import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ModeloService } from '../modelo.service';

@Component({
  selector: 'app-listar-modelo',
  templateUrl: './listar-modelo.component.html',
  styleUrls: ['./listar-modelo.component.css']
})
export class ListarModeloComponent implements OnInit {

  modelos: any;
  constructor(private modeloService: ModeloService) { }

  ngOnInit(): void {
    this.obtenerModelos();
  }

  filterData: any[] = [];
  estado: any;

  categories: any[] = [
    { value: 'NOMBRE', name: 'Nombre' },
    { value: 'ID_MARCA', name: 'Marca' },
    { value: 'ESTADO ACTIVO', name: 'Activo' },
    { value: 'ESTADO INACTIVO', name: 'Inactivo' },
  ];
  categorySelected: any = null;
  disableSearch: boolean = false;

  changeState(): void {
    if (this.categorySelected == 'ESTADO ACTIVO') {
      this.filterData = this.modelos.filter((element) => element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'ESTADO INACTIVO') {
      this.filterData = this.modelos.filter((element) => !element.ESTADO);
      this.disableSearch = true;
    } else {
      this.filterData = this.modelos;
      this.disableSearch = false;
    }
  }

  search(term: string) {
    if (!term) {
      this.filterData = this.modelos;
    } else {
      switch (this.categorySelected) {
        case 'NOMBRE':
          this.filterData = this.modelos.filter((element) =>
            element.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ID_MARCA':
          this.filterData = this.modelos.filter((element) =>
            element.ID_MARCA.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ESTADO ACTIVO':
          this.filterData = this.modelos.filter((element) => element.ESTADO);
          break;
        case 'ESTADO INACTIVO':
          this.filterData = this.modelos.filter((element) => !element.ESTADO);
          break;
        default:
          this.filterData = this.modelos.filter((element) =>
            element.NOMBRE.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
      }
    }
  }

  obtenerModelos(){
    this.modeloService.obtenerModelos().subscribe(
      (res) => {
        this.modelos = res;
        this.filterData = this.modelos;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  eliminarModelo(id: number){
    Swal.fire({
      title: 'Quiere eliminar el modelo?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue'
    }).then((result) => {
      if (result.isConfirmed) {
        this.modeloService.eliminarModelo(id).subscribe(
          (res) => {
            Swal.fire('Eliminado', '', 'success')
            this.obtenerModelos();
          },
          (err) => {
            console.log(err);
          }
        )
      }
    })
  }

}
