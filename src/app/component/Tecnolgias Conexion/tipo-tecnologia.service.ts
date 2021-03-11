import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class TipoTecnologiaService {

    constructor(private http: HttpClient){}

    obtenerTipoTecnologias(){
        return this.http.get(`${env.gestionVisualApi}/TecnologiasConexion/get`);
    }
}