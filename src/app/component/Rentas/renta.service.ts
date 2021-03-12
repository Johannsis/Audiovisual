import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Renta } from 'src/app/modules/renta';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class RentaService {
    constructor(private http: HttpClient){}

    obtenerRentas() {
        return this.http.get(`${env.gestionVisualApi}/Rentas/get`);
    }

    obtenerRenta(id: number) {
        return this.http.get(`${env.gestionVisualApi}/Rentas/${id}`);
    }
    
    crearRenta(renta: Renta) {
        return this.http.post(`${env.gestionVisualApi}/Rentas`, renta);
    }

    actualizarRenta(id: number, renta: Renta) {
        return this.http.put(`${env.gestionVisualApi}/Rentas/${id}`, renta);
    }

    eliminarRenta(id: number) {
        return this.http.delete(`${env.gestionVisualApi}/Rentas/${id}`);
    }
}