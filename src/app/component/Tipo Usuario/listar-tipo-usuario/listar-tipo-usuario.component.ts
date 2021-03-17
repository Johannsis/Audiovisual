import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TipoUsuarioService } from '../tipo-usuario.service';

@Component({
  selector: 'app-listar-tipo-usuario',
  templateUrl: './listar-tipo-usuario.component.html',
  styleUrls: ['./listar-tipo-usuario.component.css']
})
export class ListarTipoUsuarioComponent implements OnInit {

  tipoUsuario: any;

  constructor(private tipoUsuarioService: TipoUsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.tipoUsuarioService.obtenerTiposUsuario().subscribe(
      (res) =>{
        this.tipoUsuario = res;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  eliminarUsuario(id:number){
    Swal.fire({
      title: 'Quiere eliminar la marca?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoUsuarioService.eliminarTipoUsuario(id).subscribe(
          (res) => {
            Swal.fire('Eliminado', '', 'success');
            this.obtenerUsuarios();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

}
