import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Renta } from 'src/app/modules/renta';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../../Empleados/empleado.service';
import { EquipoService } from '../../Equipo/equipo.service';
import { UsuariosService } from '../../Usuarios/usuarios.service';
import { RentaService } from '../renta.service';

@Component({
  selector: 'app-crear-renta',
  templateUrl: './crear-renta.component.html',
  styleUrls: ['./crear-renta.component.css'],
})
export class CrearRentaComponent implements OnInit {
  rentaForm: FormGroup;
  arrEstado = [
    {
      value: true,
      estatus: 'Activo',
    },
    {
      value: false,
      estatus: 'Inactivo',
    },
  ];

  minDate = new Date().toISOString();

  empleados: any[] = [];
  equipos: any[] = [];
  usuarios: any[] = [];

  constructor(
    private fb: FormBuilder,
    private rentaService: RentaService,
    private empleadoService: EmpleadoService,
    private equipoService: EquipoService,
    private usuarioService: UsuariosService
  ) {
    this.rentaForm = this.fb.group({
      numero_prestamo: ['', Validators.required],
      id_empleado: ['', Validators.required],
      id_equipo: ['', Validators.required],
      id_usuario: ['', Validators.required],
      fecha_prestamo: ['', Validators.required],
      fecha_devolucion: ['', Validators.required],
      comentario: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  test(que: any) {
    console.log(que);
  }

  fechaTest1(dateChanged: any) {
    if (dateChanged < this.minDate) {
      this.rentaForm.get('fecha_prestamo')?.setValue(this.minDate);
    }
  }

  fechaTest2(dateChanged: any) {
    if (dateChanged < this.minDate) {
      this.rentaForm.get('fecha_devolucion')?.setValue(this.minDate);
    }
  }

  obtenerEmpleados(){
    this.empleadoService.obtenerEmpleados().subscribe(
      (res: any) => {
        res.forEach(element => {
          if(element.ESTADO){
            this.empleados.push(element);
          }
        });
      },
      (err) =>{
        console.log(err);
      }
    )
  }

  obtenerEquipos(){
    this.equipoService.obtenerEquipos().subscribe(
      (res: any) => {
        res.forEach(element => {
          if(element.ESTADO){
            this.equipos.push(element);
          }
        });
      },
      (err) =>{
        console.log(err);
      }
    )
  }

  obtenerUsuarios(){
    this.usuarioService.obtenerUsuarios().subscribe(
      (res: any) => {
        res.forEach(element => {
          if(element.ESTADO){
            this.usuarios.push(element);
          }
        });
      },
      (err)=>{
        console.log(err);
      }
    )
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
      ESTADO: this.rentaForm.get('estado')?.value == "true",
    };
    this.rentaService.crearRenta(renta).subscribe(
      (res) => {
        Swal.fire('Exito', 'Renta creada', 'success');
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(renta);
  }

  ngOnInit(): void {
    this.minDate = this.minDate.split('T')[0];
    this.obtenerEmpleados();
    this.obtenerEquipos();
    this.obtenerUsuarios();
  }
}
