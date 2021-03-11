import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/modules/marca';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-listar-marca',
  templateUrl: './listar-marca.component.html',
  styleUrls: ['./listar-marca.component.css']
})
export class ListarMarcaComponent implements OnInit {
  
  marcas:any;
  constructor(private marcaService: MarcaService) { 
    this.marcas= [];
  }
  ngOnInit(): void {
    this.marcaService.obtenerMarcas().subscribe(
      res=> {
        this.marcas= res;
        console.log(res); 
      }
    )
  }

}
