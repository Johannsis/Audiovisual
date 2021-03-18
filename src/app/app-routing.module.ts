import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEmpleadoComponent } from './component/Empleados/crear-empleado/crear-empleado.component';
import { ListarEmpleadoComponent } from './component/Empleados/listar-empleado/listar-empleado.component';
import { CrearEquipoComponent } from './component/Equipo/crear-equipo/crear-equipo.component';
import { ListarEquipoComponent } from './component/Equipo/listar-equipo/listar-equipo.component';
import { CrearMarcaComponent } from './component/Marca/crear-marca/crear-marca.component';
import { ListarMarcaComponent } from './component/Marca/listar-marca/listar-marca.component';
import { CrearModeloComponent } from './component/Modelo/crear-modelo/crear-modelo.component';
import { ListarModeloComponent } from './component/Modelo/listar-modelo/listar-modelo.component';
import { CrearRentaComponent } from './component/Rentas/crear-renta/crear-renta.component';
import { ListarRentaComponent } from './component/Rentas/listar-renta/listar-renta.component';
import { CrearTecnologiaConexionComponent } from './component/Tecnolgias Conexion/crear-tecnologia-conexion/crear-tecnologia-conexion.component';
import { ListarTecnologiaConexionComponent } from './component/Tecnolgias Conexion/listar-tecnologia-conexion/listar-tecnologia-conexion.component';
import { CrearTipoEquipoComponent } from './component/Tipo Equipo/crear-tipo-equipo/crear-tipo-equipo.component';
import { ListarTipoEquipoComponent } from './component/Tipo Equipo/listar-tipo-equipo/listar-tipo-equipo.component';
import { CrearTipoUsuarioComponent } from './component/Tipo Usuario/crear-tipo-usuario/crear-tipo-usuario.component';
import { ListarTipoUsuarioComponent } from './component/Tipo Usuario/listar-tipo-usuario/listar-tipo-usuario.component';
import { CrearUsuarioComponent } from './component/Usuarios/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './component/Usuarios/listar-usuario/listar-usuario.component';

const routes: Routes = [
  { path: "", component: ListarEquipoComponent},
  { path: "crearEquipo", component: CrearEquipoComponent},
  { path: "listarEmpleado", component: ListarEmpleadoComponent},
  { path: "crearEmpleado", component: CrearEmpleadoComponent},
  { path: "listarMarca", component: ListarMarcaComponent},
  { path: "crearMarca", component: CrearMarcaComponent},
  { path: "listarModelo", component: ListarModeloComponent},
  { path: "crearModelo", component: CrearModeloComponent},
  { path: "modificarModelo/:ID", component: CrearModeloComponent},
  { path: "listarRenta", component: ListarRentaComponent},
  { path: "crearRenta", component: CrearRentaComponent},
  { path: "listarTecnologia", component: ListarTecnologiaConexionComponent},
  { path: "crearTecnologia", component: CrearTecnologiaConexionComponent},
  { path: "listarTipoEquipo", component: ListarTipoEquipoComponent},
  { path: "crearTipoEquipo", component: CrearTipoEquipoComponent},
  { path: "listarTipoUsuario", component: ListarTipoUsuarioComponent},
  { path: "crearTipoUsuario", component: CrearTipoUsuarioComponent},
  { path: "listarUsuario", component: ListarUsuarioComponent},
  { path: "crearUsuario", component: CrearUsuarioComponent},
  { path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
