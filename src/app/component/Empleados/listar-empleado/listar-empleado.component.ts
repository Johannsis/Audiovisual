import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  empleados:any;

  obtenerEmpleados(){
      this.empleadoService.obtenerEmpleados().subscribe(
        res=>{
          this.empleados = res;
        },
        err=>console.log(err)
      )
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  eliminarEmpleado(id: number) {
    Swal.fire({
      title: 'Quiere eliminar el equipo?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.eliminarEmpleado(id).subscribe(
          (res)=>{
            Swal.fire('Eliminado!', '', 'success')
            this.obtenerEmpleados();
          },
          (err)=>{
            console.log(err);
          }
        )
      }
    })
  }
}
