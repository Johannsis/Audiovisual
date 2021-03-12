import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TecnologiaConexion } from 'src/app/modules/technologias';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class TipoTecnologiaService {

    constructor(private http: HttpClient){}

    obtenerTipoTecnologias(){
        return this.http.get(`${env.gestionVisualApi}/TecnologiasConexion/get`);
    }

    obtenerTipoTecnologia(id: number) {
        return this.http.get(`${env.gestionVisualApi}/TecnologiasConexion/${id}`);
    }

    crearTipoTecnologia(usuario: TecnologiaConexion) {
        return this.http.post(`${env.gestionVisualApi}/TecnologiasConexion`, usuario);
    }

    actualizarTipoTecnologia(id: number, usuario: TecnologiaConexion) {
        return this.http.put(`${env.gestionVisualApi}/TecnologiasConexion/${id}`, usuario);
    }

    eliminarTipoTecnologia(id: number) {
        return this.http.delete(`${env.gestionVisualApi}/TecnologiasConexion/${id}`);
    }
}