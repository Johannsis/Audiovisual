import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoEquipo } from 'src/app/modules/tipo_equipo';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class TipoEquipoService {
    constructor(private http: HttpClient) { }

    obtenerTiposEquipo() {
        return this.http.get(`${env.gestionVisualApi}/TipoEquipo/get`);
    }

    obtenerTipoEquipo(id: number) {
        return this.http.get(`${env.gestionVisualApi}/TipoEquipo/${id}`);
    }

    crearTipoEquipo(usuario: TipoEquipo) {
        return this.http.post(`${env.gestionVisualApi}/TipoEquipo`, usuario);
    }

    actualizarTipoEquipo(id: number, usuario: TipoEquipo) {
        return this.http.put(`${env.gestionVisualApi}/TipoEquipo/${id}`, usuario);
    }

    eliminarTipoEquipo(id: number) {
        return this.http.delete(`${env.gestionVisualApi}/TipoEquipo/${id}`);
    }
}
