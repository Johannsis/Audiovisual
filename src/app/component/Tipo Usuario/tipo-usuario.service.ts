import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoUsuarios } from 'src/app/modules/tipo_usuario';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class TipoUsuarioService {
    constructor(private http:HttpClient){}

    obtenerTiposUsuario() {
        return this.http.get(`${env.gestionVisualApi}/TipoUsuario/get`);
    }

    obtenerTipoUsuario(id: number) {
        return this.http.get(`${env.gestionVisualApi}/TipoUsuario/${id}`);
    }
    
    crearTipoUsuario(usuario: TipoUsuarios) {
        return this.http.post(`${env.gestionVisualApi}/TipoUsuario`, usuario);
    }

    actualizarTipoUsuario(id: number, usuario: TipoUsuarios) {
        return this.http.put(`${env.gestionVisualApi}/TipoUsuario/${id}`, usuario);
    }

    eliminarTipoUsuario(id: number) {
        return this.http.delete(`${env.gestionVisualApi}/TipoUsuario/${id}`);
    }
}