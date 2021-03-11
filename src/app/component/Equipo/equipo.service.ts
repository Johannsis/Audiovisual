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
    
}