import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-listar-equipo',
  templateUrl: './listar-equipo.component.html',
  styleUrls: ['./listar-equipo.component.css']
})
export class ListarEquipoComponent implements OnInit {

  equipos: any;
  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  obtenerEquipos(){
    this.equipoService.obtenerEquipos().subscribe(
      (res) => {
        this.equipos = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  eliminarEquipo(id: number) {
    Swal.fire({
      title: 'Quiere eliminar el equipo?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue' 
    }).then((result) => {
      if (result.isConfirmed) {
        this.equipoService.eliminarEquipo(id).subscribe(
          (res)=>{
            Swal.fire('Eliminado!', '', 'success')
            this.obtenerEquipos();
          },
          (err)=>{
            console.log(err);
          }
        )
      }
    })
  }

}
