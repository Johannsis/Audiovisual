import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipo } from 'src/app/modules/equipo';
import { MarcaService } from '../../Marca/marca.service';
import { TipoTecnologiaService } from '../../Tecnolgias Conexion/tipo-tecnologia.service';
import { TipoEquipoService } from '../../Tipo Equipo/tipo-equipo.service';
import { EquipoService } from '../equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css'],
})
export class CrearEquipoComponent implements OnInit {
  equipoForm: FormGroup;

  arrEstado = [{
    value: true,
    estatus: "Activo"
  },
  {
    value: false,
    estatus: "Inactivo"
  }
  ];
  marcas: any;
  modelos: any;
  tipoEquipos: any;
  tipoTecnologia: any;
  constructor(private fb: FormBuilder,
    private marcaService: MarcaService,
    private tipoTecnologiaService: TipoTecnologiaService,
    private tipoEquipoService: TipoEquipoService,
    private equipoService: EquipoService) {
    this.equipoForm = this.fb.group({
      descripcion: ['', Validators.required],
      numeroSerial: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      idTipoNumero: ['', Validators.required],
      idTipoTecnologia: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  test(que: any) {
    console.log(que);
  }


  obtenerMarcas() {
    this.marcaService.obtenerMarcas().subscribe(
      (res) => {
        this.marcas = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  obtenerTiposEquipo() {
    this.tipoEquipoService.obtenerTiposEquipo().subscribe(
      (res) => {
        this.tipoEquipos = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  obtenerTipoTecnologia() {
    this.tipoTecnologiaService.obtenerTipoTecnologias().subscribe(
      (res) => {
        this.tipoTecnologia = res;
        console.log(res);
      },
      (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.obtenerMarcas();
    this.obtenerTiposEquipo();
    this.obtenerTipoTecnologia();
  }

  obtenerModelosMarca(idModelo: any) {
    this.marcaService.obtenerModelosMarca(idModelo).subscribe(
      (res) => {
        this.modelos = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  agregarEquipo() {
    const EQUIPO: Equipo = {
      DESCRIPCION: this.equipoForm.get('descripcion')?.value,
      NUMERO_SERIAL: this.equipoForm.get('numeroSerial')?.value,
      ID_MARCA: this.equipoForm.get('marca')?.value,
      ID_MODELO: this.equipoForm.get('modelo')?.value,
      ID_TIPO_EQUIPO: this.equipoForm.get('idTipoNumero')?.value,
      ID_TECNOLOGIA_CONEXION: this.equipoForm.get('idTipoTecnologia')?.value,
      ESTADO: this.equipoForm.get('ESTADO')?.value == "true",
    };

    this.equipoService.crearEquipo(EQUIPO).subscribe(
      (res)=>{
        Swal.fire(
          'Equipo Creado',
          'El equipo se ha creado',
          'success'
        );
      },
      (err)=>{
        console.log(err)
      }
    )
    console.log(EQUIPO);
  }
}
