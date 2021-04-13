import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TipoTecnologiaService } from '../tipo-tecnologia.service';

@Component({
  selector: 'app-listar-tecnologia-conexion',
  templateUrl: './listar-tecnologia-conexion.component.html',
  styleUrls: ['./listar-tecnologia-conexion.component.css']
})
export class ListarTecnologiaConexionComponent implements OnInit {

  tipoTecnologia: any;

  constructor(private tipoTecnologiaService: TipoTecnologiaService) { }

  ngOnInit(): void {
    this.obtenerTipoTecnologia();
  }

  filterData: any[] = [];

  categories: any[] = [
    { value: 'DESCRIPCION', name: 'Descripcion' },
    { value: 'ESTADO ACTIVO', name: 'Activo' },
    { value: 'ESTADO INACTIVO', name: 'Inactivo' },
  ];
  categorySelected: any = null;
  disableSearch: boolean = false;

  changeState(): void {
    if (this.categorySelected == 'ESTADO ACTIVO') {
      this.filterData = this.tipoTecnologia.filter((element) => element.ESTADO);
      this.disableSearch = true;
    } else if (this.categorySelected == 'ESTADO INACTIVO') {
      this.filterData = this.tipoTecnologia.filter((element) => !element.ESTADO);
      this.disableSearch = true;
    } else {
      this.filterData = this.tipoTecnologia;
      this.disableSearch = false;
    }
  }

  search(term: string) {
    if (!term) {
      this.filterData = this.tipoTecnologia;
    } else {
      switch (this.categorySelected) {
        case 'DESCRIPCION':
          this.filterData = this.tipoTecnologia.filter((element) =>
            element.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
        case 'ESTADO ACTIVO':
          this.filterData = this.tipoTecnologia.filter((element) => element.ESTADO);
          break;
        case 'ESTADO INACTIVO':
          this.filterData = this.tipoTecnologia.filter((element) => !element.ESTADO);
          break;
        default:
          this.filterData = this.tipoTecnologia.filter((element) =>
            element.DESCRIPCION.trim()
              .toLowerCase()
              .includes(term.trim().toLowerCase())
          );
          break;
      }
    }
  }

  obtenerTipoTecnologia(){
    this.tipoTecnologiaService.obtenerTipoTecnologias().subscribe(
      (res) =>{
        this.tipoTecnologia = res;
        this.filterData = this.tipoTecnologia;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  eliminarTipoTecnologia(id: number) {
    Swal.fire({
      title: 'Quiere eliminar el tipo de tecnologia?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoTecnologiaService.eliminarTipoTecnologia(id).subscribe(
          (res)=>{
            Swal.fire('Eliminado!', '', 'success')
            this.obtenerTipoTecnologia();
          },
          (err)=>{
            console.log(err);
          }
        )
      }
    })
  }

}
