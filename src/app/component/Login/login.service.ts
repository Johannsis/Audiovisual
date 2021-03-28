import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/modules/login';
import { env } from 'src/enviroment/enviroment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient, private router: Router) { }

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  login(login: Login) {
    var logged = this._http.post(`${env.gestionVisualApi}/Empleados/login`, login);
    if (logged) {
      this.loggedIn.next(true);
      this.router.navigate(['/listarEquipo'])
      return logged;
    }
    return false;
  }
  
  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
