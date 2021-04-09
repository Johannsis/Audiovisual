import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modelo } from 'src/app/modules/modelo';
import Swal from 'sweetalert2';
import { MarcaService } from '../../Marca/marca.service';
import { ModeloService } from '../modelo.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-crear-modelo',
  templateUrl: './crear-modelo.component.html',
  styleUrls: ['./crear-modelo.component.css'],
})
export class CrearModeloComponent implements OnInit {
  modeloForm: FormGroup;
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

  marcas: any[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private modeloService: ModeloService,
    private marcaService: MarcaService
  ) {
    this.modeloForm = this.fb.group({
      NOMBRE: ['', Validators.required],
      ID_MARCA: ['', Validators.required],
      ESTADO: ['', Validators.required]
    });
  }

  test(que: any) {
    console.log(que);
  }


  obtenerMarcas() {
    this.marcaService.obtenerMarcas().subscribe(
      (res: any) => {
        res.forEach((element:any) => {
          if(element.ESTADO){
            this.marcas.push(element);
          }
        });
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  agregarModelo() {
    const modelo: Modelo = {
      NOMBRE: this.modeloForm.get('NOMBRE')?.value,
      ID_MARCA: this.modeloForm.get('ID_MARCA')?.value,
      ESTADO: this.modeloForm.get('ESTADO')?.value == "true",
    };
    if(this.funcion == "Crear modelo"){
      this.modeloService.crearModelo(modelo).subscribe(
        (res) => {
          Swal.fire('Exito', 'Modelo creado', 'success');
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
      console.log(modelo);
    }else{
      this.modificarModelo(this.modelo.ID, modelo);
    }
  }

  funcion: any;
  modelo:any;

  obtenerModelo(ID: number){
    this.modeloService.obtenerModelo(ID).subscribe(
      (res)=>{
        this.modelo = res;
        console.log(this.modelo);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  modificarModelo(ID:number, Model: Modelo){
    this.modeloService.actualizarModelo(ID, Model).subscribe(
      (res)=>{
        Swal.fire(
          'Modelo Actualizado',
          '',
          'success'
        );
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (res)=>{
        if(res.ID){
          this.funcion = "Actualizar modelo";
          this.obtenerModelo(res.ID);
          console.log(this.modelo);
        }else{
          this.funcion = "Crear modelo"
        }
        console.log(this.funcion);
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
    this.obtenerMarcas();
  }
}
