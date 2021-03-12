import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from 'src/app/modules/usuarios';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    constructor(private http:HttpClient){}

    obtenerUsuarios() {
        return this.http.get(`${env.gestionVisualApi}/Usuario/get`);
    }

    obtenerUsuario(id: number) {
        return this.http.get(`${env.gestionVisualApi}/Usuario/${id}`);
    }
    
    crearUsuario(usuario: Usuarios) {
        return this.http.post(`${env.gestionVisualApi}/Usuario`, usuario);
    }

    actualizarUsuario(id: number, usuario: Usuarios) {
        return this.http.put(`${env.gestionVisualApi}/Usuario/${id}`, usuario);
    }

    eliminarUsuario(id: number) {
        return this.http.delete(`${env.gestionVisualApi}/Usuario/${id}`);
    }
}