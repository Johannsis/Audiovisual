import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-listar-marca',
  templateUrl: './listar-marca.component.html',
  styleUrls: ['./listar-marca.component.css'],
})
export class ListarMarcaComponent implements OnInit {
  marcas: any;
  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.obtenerMarcas();
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
  }

  eliminarMarca(id: number) {
    Swal.fire({
      title: 'Quiere eliminar la marca?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue',
    }).then((result) => {
      if (result.isConfirmed) {
        this.marcaService.eliminarMarca(id).subscribe(
          (res) => {
            Swal.fire('Eliminado', '', 'success');
            this.obtenerMarcas();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }
}
