import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/modules/login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: Login = {
    EMAIL:"",
    PASSWORD:"",
  };

  constructor(private router: Router, private loginService: LoginService) {}

  isEmptyOrSpaces(text: string): boolean {
    return !text || text.trim() === '';
  }

  validateLogin(): boolean {
    if (
      this.isEmptyOrSpaces(this.user.EMAIL) ||
      this.isEmptyOrSpaces(this.user.PASSWORD)
    ) {
      alert('No deje ninguna casilla vacia.');
      return false;
    }
    if (this.user.EMAIL.length == 0 || this.user.PASSWORD.length == 0) {
      alert('Escriba su info.');
      return false;
    }
    return true;
  }


  empleado: any;

  login(): void {
    console.log(this.user);

    this.loginService.login(this.user).subscribe(
      (res) => {
        this.empleado = res;
        console.log(res);
        localStorage.setItem("ID", ""+this.empleado.ID);
        localStorage.setItem("Estatus", "true");

        this.router.navigate(['/listarEquipo']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
}
