import { Component, OnInit } from '@angular/core';
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

}
