import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from 'src/app/modules/marca';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class MarcaService {
    constructor(
        private http: HttpClient
    ) { }
    
    
    obtenerMarcas() {
        return this.http.get(`${env.gestionVisualApi}/Marca/get`);
    }

    obtenerModelosMarca(idMarca:number) {
        return this.http.get(`${env.gestionVisualApi}/Marca/modelos/${idMarca}`);
    }

    crearMarca(marca: Marca) : Observable<any> {
        return this.http.post(`${env.gestionVisualApi}/Marca`, marca);
    }
}