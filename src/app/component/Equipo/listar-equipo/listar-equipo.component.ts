import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-listar-equipo',
  templateUrl: './listar-equipo.component.html',
  styleUrls: ['./listar-equipo.component.css']
})
export class ListarEquipoComponent implements OnInit {

  equipo: any; 
  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.equipoService.obtenerEquipos().subscribe(
      (res)=>{
        this.equipo = res;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
