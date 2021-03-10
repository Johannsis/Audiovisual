import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEquipoComponent } from './component/crear-equipo/crear-equipo.component';
import { ListarEquipoComponent } from './component/listar-equipo/listar-equipo.component';

const routes: Routes = [
  { path: "", component: ListarEquipoComponent},
  { path: "crearEquipo", component: CrearEquipoComponent},
  { path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
