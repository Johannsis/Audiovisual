import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modelo } from 'src/app/modules/modelo';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class ModeloService {
    constructor(private http:HttpClient){}

    obtenerModelos() {
        return this.http.get(`${env.gestionVisualApi}/Modelo/get`);
    }

    obtenerModelo(id: number) {
        return this.http.get(`${env.gestionVisualApi}/Modelo/${id}`);
    }

    crearModelo(modelo: Modelo) {
        return this.http.post(`${env.gestionVisualApi}/Modelo`, modelo);
    }

    actualizarModelo(id: number, modelo: Modelo) {
        return this.http.put(`${env.gestionVisualApi}/Modelo/${id}`, modelo);
    }

    eliminarModelo(id: number) {
        return this.http.delete(`${env.gestionVisualApi}/Modelo/${id}`);
    }
}