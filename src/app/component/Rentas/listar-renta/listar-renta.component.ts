import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RentaService } from '../renta.service';

@Component({
  selector: 'app-listar-renta',
  templateUrl: './listar-renta.component.html',
  styleUrls: ['./listar-renta.component.css']
})
export class ListarRentaComponent implements OnInit {

  rentas: any;

  constructor(private rentaService: RentaService) { }

  ngOnInit(): void {
    this.obtenerRentas();
  }

  obtenerRentas(){
    this.rentaService.obtenerRentas().subscribe(
      (res)=>{
        this.rentas = res;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  eliminarRenta(id: number) {
    Swal.fire({
      title: 'Quiere eliminar el equipo?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rentaService.eliminarRenta(id).subscribe(
          (res)=>{
            Swal.fire('Eliminado!', '', 'success')
            this.obtenerRentas();
          },
          (err)=>{
            console.log(err);
          }
        )
      }
    })
  }

}
