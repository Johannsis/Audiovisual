import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/modules/empleado';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;

  tandas = ["Matutina", "Completa", "Vespertina", "Nocturna", "Mixta"];

  arrEstado = [{
    value: true,
    estatus: "Activo"
  },
  {
    value: false,
    estatus: "Inactivo"
  }
  ];

  minDate = new Date().toISOString();

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService) {
    this.empleadoForm = this.fb.group({
      NOMBRE: ['', Validators.required],
      APELLIDO: ['', Validators.required],
      CEDULA: ['', Validators.required],
      EMAIL: ['', Validators.required],
      PASSWORD: ['', Validators.required],
      TANDA: ['', Validators.required],
      FECHA_INGRESO: ['', Validators.required],
      ESTADO: ['', Validators.required],
    });
  }

  fechaTest(dateChanged: any) {
    if (dateChanged < this.minDate) {
      this.empleadoForm.get('FECHA_INGRESO')?.setValue(this.minDate);
    }
  }

  ngOnInit(): void {
    this.minDate = this.minDate.split('T')[0];
    this.tandas;
    this.arrEstado;
    console.log(this.minDate);
  }

  agregarEmpleado() {
    const empleado: Empleado = {
      NOMBRE: this.empleadoForm.get('NOMBRE')?.value,
      APELLIDO: this.empleadoForm.get('APELLIDO')?.value,
      CEDULA: this.empleadoForm.get('CEDULA')?.value,
      EMAIL: this.empleadoForm.get('EMAIL')?.value,
      PASSWORD: this.empleadoForm.get('PASSWORD')?.value,
      TANDA: this.empleadoForm.get('TANDA')?.value,
      FECHA_INGRESO: this.empleadoForm.get('FECHA_INGRESO')?.value,
      ESTADO: this.empleadoForm.get('ESTADO')?.value == "true"
    };

    this.empleadoService.crearEmpleado(empleado).subscribe(
      (res) => {
          Swal.fire(
            'Empleado Creado',
            'El empleado se ha creado',
            'success'
          );
      },
      (err) => {
        console.log(err)
        if(err.error.text =="La c??dula es invalida"){
          Swal.fire(
            'Error',
            'Empleado no creado, cedula invalida',
            'error'
          );
        }else if(err.error.text=="C??dula ya registrada"){
          Swal.fire(
            'Error',
            'Empleado no creado, cedula ya registrada',
            'error'
          );
        }
        else{
          console.log(err);
        }
      }
    )
    this.empleadoForm.reset(this.empleadoForm.value);
  }

}
