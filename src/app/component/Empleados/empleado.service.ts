import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from 'src/app/modules/empleado';
import { env } from 'src/enviroment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class EmpleadoService {
    constructor(private http: HttpClient) { }

    obtenerEmpleados() {
        return this.http.get(`${env.gestionVisualApi}/Empleados/get`);
    }

    obtenerEmpleado(id: number) {
        return this.http.get(`${env.gestionVisualApi}/Empleados/${id}`);
    }

    crearEmpleado(empleado: Empleado) {
        return this.http.post(`${env.gestionVisualApi}/Empleados`, empleado);
    }

    actualizarEmpleado(id: number, empleado: Empleado) {
        return this.http.put(`${env.gestionVisualApi}/Empleados/${id}`, empleado);
    }

    eliminarEmpleado(id: number) {
        return this.http.delete(`${env.gestionVisualApi}/Empleados/${id}`);
    }
}