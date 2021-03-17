import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: any;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.usuarioService.obtenerUsuarios().subscribe(
      (res)=>{
        this.usuarios = res;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  eliminarUsuario(id:number){
    Swal.fire({
      title: 'Quiere eliminar el usuario?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      confirmButtonColor: 'red',
      denyButtonText: `No`,
      denyButtonColor: 'blue'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminarUsuario(id).subscribe(
          (res)=>{
            Swal.fire('Eliminado!', '', 'success')
            this.obtenerUsuarios();
          },
          (err)=>{
            console.log(err);
          }
        )
      }
    })
  }
}
