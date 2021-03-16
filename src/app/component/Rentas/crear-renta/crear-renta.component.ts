import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Renta } from 'src/app/modules/renta';
import Swal from 'sweetalert2';
import { RentaService } from '../renta.service';

@Component({
  selector: 'app-crear-renta',
  templateUrl: './crear-renta.component.html',
  styleUrls: ['./crear-renta.component.css']
})
export class CrearRentaComponent implements OnInit {

  rentaForm: FormGroup;
  arrEstado = [
    {
      value: true,
      estatus: 'Activo'
    },
    {
      value: false,
      estatus: 'Inactivo'
    },
  ];

  constructor(private fb: FormBuilder, private rentaService: RentaService) {
    this.rentaForm = this.fb.group({
      numero_prestamo: ['', Validators.required],
      id_empleado: ['', Validators.required],
      id_equipo: ['', Validators.required],
      id_usuario: ['', Validators.required],
      fecha_prestamo: ['', Validators.required],
      fecha_devolucion: ['', Validators.required],
      comentario: ['', Validators.required],
      estado: ['', Validators.required]
    })
   }

   agregarRenta() {
     const renta: Renta = {
       NUMERO_PRESTAMO: this.rentaForm.get('numero_prestamo')?.value,
       ID_EMPLEADO: this.rentaForm.get('id_empleado')?.value,
       ID_EQUIPO: this.rentaForm.get('id_equipo')?.value,
       ID_USUARIO: this.rentaForm.get('id_usuario')?.value,
       FECHA_PRESTAMO: this.rentaForm.get('fecha_prestamo')?.value,
       FECHA_DEVOLUCION: this.rentaForm.get('fecha_devolucion')?.value,
       COMENTARIO: this.rentaForm.get('comentario')?.value,
       ESTADO:this.rentaForm.get('estado')?.value
     };
     this.rentaService.crearRenta(renta).subscribe(
       (res) => {
         Swal.fire(
           'Exito',
           'Renta creada',
           'success'
         );
         console.log(res)
       },
       (err) => {
         console.log(err)
       }
     );
     console.log(renta);
   }

  ngOnInit(): void {
  }

}
