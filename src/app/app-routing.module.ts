import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CrearEmpleadoComponent } from './component/Empleados/crear-empleado/crear-empleado.component';
import { ListarEmpleadoComponent } from './component/Empleados/listar-empleado/listar-empleado.component';
import { CrearEquipoComponent } from './component/Equipo/crear-equipo/crear-equipo.component';
import { ListarEquipoComponent } from './component/Equipo/listar-equipo/listar-equipo.component';
import { LoginComponent } from './component/Login/login.component';
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
  { path: "login", component: LoginComponent },
  { path: "listarEquipo", component: ListarEquipoComponent, canActivate: [AuthGuard] },
  { path: "crearEquipo", component: CrearEquipoComponent, canActivate: [AuthGuard] },
  { path: "listarEmpleado", component: ListarEmpleadoComponent, canActivate: [AuthGuard] },
  { path: "crearEmpleado", component: CrearEmpleadoComponent, canActivate: [AuthGuard] },
  { path: "listarMarca", component: ListarMarcaComponent, canActivate: [AuthGuard] },
  { path: "crearMarca", component: CrearMarcaComponent, canActivate: [AuthGuard] },
  { path: "listarModelo", component: ListarModeloComponent, canActivate: [AuthGuard] },
  { path: "crearModelo", component: CrearModeloComponent, canActivate: [AuthGuard] },
  { path: "modificarModelo/:ID", component: CrearModeloComponent, canActivate: [AuthGuard] },
  { path: "listarRenta", component: ListarRentaComponent, canActivate: [AuthGuard] },
  { path: "crearRenta", component: CrearRentaComponent, canActivate: [AuthGuard] },
  { path: "listarTecnologia", component: ListarTecnologiaConexionComponent, canActivate: [AuthGuard] },
  { path: "crearTecnologia", component: CrearTecnologiaConexionComponent, canActivate: [AuthGuard] },
  { path: "modificarTecnologia/:ID", component: CrearTecnologiaConexionComponent, canActivate: [AuthGuard] },
  { path: "listarTipoEquipo", component: ListarTipoEquipoComponent, canActivate: [AuthGuard] },
  { path: "crearTipoEquipo", component: CrearTipoEquipoComponent, canActivate: [AuthGuard] },
  { path: "modificarTipoEquipo/:ID", component: CrearTipoEquipoComponent, canActivate: [AuthGuard] },
  { path: "listarTipoUsuario", component: ListarTipoUsuarioComponent, canActivate: [AuthGuard] },
  { path: "crearTipoUsuario", component: CrearTipoUsuarioComponent, canActivate: [AuthGuard] },
  { path: "modificarTipoUsuario", component: CrearTipoUsuarioComponent, canActivate: [AuthGuard] },
  { path: "listarUsuario", component: ListarUsuarioComponent, canActivate: [AuthGuard] },
  { path: "crearUsuario", component: CrearUsuarioComponent, canActivate: [AuthGuard] },
  { path: "modificarTipoUsuario", component: CrearUsuarioComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
