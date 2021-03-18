import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/modules/login';
import { env } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) {}

  login(login: Login){
    return this._http.post(`${env.gestionVisualApi}/Empleados/login`, login);
  }
}
