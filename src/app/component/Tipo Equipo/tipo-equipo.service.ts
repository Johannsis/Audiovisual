import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class TipoEquipoService {
    constructor(private http:HttpClient){}

    obtenerTiposEquipo(){
        return this.http.get(`${env.gestionVisualApi}/TipoEquipo/get`);
    }
}