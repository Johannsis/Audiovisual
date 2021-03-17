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

  obtenerTipoTecnologia(){
    this.tipoTecnologiaService.obtenerTipoTecnologias().subscribe(
      (res) =>{
        this.tipoTecnologia = res;
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
