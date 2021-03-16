import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modelo } from 'src/app/modules/modelo';
import Swal from 'sweetalert2';
import { ModeloService } from '../modelo.service';

@Component({
  selector: 'app-crear-modelo',
  templateUrl: './crear-modelo.component.html',
  styleUrls: ['./crear-modelo.component.css']
})
export class CrearModeloComponent implements OnInit {

  modeloForm: FormGroup;
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

  constructor(private fb: FormBuilder, private modeloService: ModeloService) {
    this.modeloForm = this.fb.group({
      nombre: ['', Validators.required],
      id_marca: ['', Validators.required],
      estado: ['', Validators.required]
    })
   }

   agregarModelo(){
     const modelo: Modelo = {
       NOMBRE: this.modeloForm.get('nombre')?.value,
       ID_MARCA: this.modeloForm.get('id_marca')?.value,
       ESTADO: this.modeloForm.get('estado')?.value
     };
     this.modeloService.crearModelo(modelo).subscribe(
      (res) => {
        Swal.fire(
          'Exito',
          'Modelo creado',
          'success'
        );
        console.log(res)
      },
      (err) => {
        console.log(err);
      }
      );
      console.log(modelo);
   }


  ngOnInit(): void {
  }

}
