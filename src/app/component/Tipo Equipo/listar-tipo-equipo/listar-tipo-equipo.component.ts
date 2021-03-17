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

  obtenerTipoEquipo(){
    this.tipoEquipoService.obtenerTiposEquipo().subscribe(
      (res)=>{
        this.tipoEquipo = res;
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
