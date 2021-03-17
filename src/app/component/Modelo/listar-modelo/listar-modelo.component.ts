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

  obtenerModelos(){
    this.modeloService.obtenerModelos().subscribe(
      (res) => {
        this.modelos = res;
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
