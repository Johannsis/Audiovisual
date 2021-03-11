import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEquipoComponent } from './component/Equipo/listar-equipo/listar-equipo.component';
import { CrearEquipoComponent } from './component/Equipo/crear-equipo/crear-equipo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearEmpleadoComponent } from './component/Empleados/crear-empleado/crear-empleado.component';
import { ListarEmpleadoComponent } from './component/Empleados/listar-empleado/listar-empleado.component';
import { ListarMarcaComponent } from './component/Marca/listar-marca/listar-marca.component';
import { CrearMarcaComponent } from './component/Marca/crear-marca/crear-marca.component';
import { CrearModeloComponent } from './component/Modelo/crear-modelo/crear-modelo.component';
import { ListarModeloComponent } from './component/Modelo/listar-modelo/listar-modelo.component';
import { ListarRentaComponent } from './component/Rentas/listar-renta/listar-renta.component';
import { CrearRentaComponent } from './component/Rentas/crear-renta/crear-renta.component';
import { CrearTecnologiaConexionComponent } from './component/Tecnolgias Conexion/crear-tecnologia-conexion/crear-tecnologia-conexion.component';
import { ListarTecnologiaConexionComponent } from './component/Tecnolgias Conexion/listar-tecnologia-conexion/listar-tecnologia-conexion.component';
import { ListarTipoEquipoComponent } from './component/Tipo Equipo/listar-tipo-equipo/listar-tipo-equipo.component';
import { CrearTipoEquipoComponent } from './component/Tipo Equipo/crear-tipo-equipo/crear-tipo-equipo.component';
import { CrearTipoUsuarioComponent } from './component/Tipo Usuario/crear-tipo-usuario/crear-tipo-usuario.component';
import { ListarTipoUsuarioComponent } from './component/Tipo Usuario/listar-tipo-usuario/listar-tipo-usuario.component';
import { ListarUsuarioComponent } from './component/Usuarios/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './component/Usuarios/crear-usuario/crear-usuario.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListarEquipoComponent,
    CrearEquipoComponent,
    CrearEmpleadoComponent,
    ListarEmpleadoComponent,
    ListarMarcaComponent,
    CrearMarcaComponent,
    CrearModeloComponent,
    ListarModeloComponent,
    ListarRentaComponent,
    CrearRentaComponent,
    CrearTecnologiaConexionComponent,
    ListarTecnologiaConexionComponent,
    ListarTipoEquipoComponent,
    CrearTipoEquipoComponent,
    CrearTipoUsuarioComponent,
    ListarTipoUsuarioComponent,
    ListarUsuarioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
