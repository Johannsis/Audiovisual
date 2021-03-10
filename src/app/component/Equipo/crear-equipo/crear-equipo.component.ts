import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipo } from 'src/app/modules/equipo';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css'],
})
export class CrearEquipoComponent implements OnInit {
  equipoForm: FormGroup;
  arr: any[] = ['baby girl', 'Illneverhurtyouagain', 'Imsorry', 'ErikIloveu'];
  array = [
    {
      ID: 1,
      Description: 'Bb',
    },
    {
      ID: 2,
      Description: 'Bb',
    },
    {
      ID: 3,
      Description: 'Bb2',
    },
    {
      ID: 4,
      Description: 'Bb3',
    },
  ];

  arrEstado = [true, false];

  constructor(private fb: FormBuilder) {
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

  ngOnInit(): void {}

  agregarEquipo() {
    const EQUIPO: Equipo = {
      DESCRIPCION: this.equipoForm.get('descripcion')?.value,
      NUMERO_SERIAL: this.equipoForm.get('numeroSerial')?.value,
      ID_MARCA: this.equipoForm.get('marca')?.value,
      ID_MODELO: this.equipoForm.get('modelo')?.value,
      ID_TIPO_EQUIPO: this.equipoForm.get('idTipoNumero')?.value,
      ID_TECNOLOGIA_CONEXION: this.equipoForm.get('idTipoTecnologia')?.value,
      ESTADO: this.equipoForm.get('estado')?.value,
    };

    console.log(EQUIPO);
  }
}
