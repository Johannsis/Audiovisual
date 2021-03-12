import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from 'src/app/modules/equipo';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class EquipoService {

    constructor(private http: HttpClient) { }

    obtenerEquipos() {
        return this.http.get(`${env.gestionVisualApi}/Equipo/get`);
    }

    crearEquipo(equipo: Equipo) {
        return this.http.post(`${env.gestionVisualApi}/Equipo`, equipo);
    }

    actualizarEquipo(id: number, equipo: Equipo) {
        return this.http.put(`${env.gestionVisualApi}/Equipo/${id}`, equipo);
    }

    eliminarEquipo(id: number) { 
        return this.http.delete(`${env.gestionVisualApi}/Equipo/${id}`);
    }
}