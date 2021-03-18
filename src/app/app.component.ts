import { Component, OnInit } from '@angular/core';
import { LoginService } from './component/Login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: LoginService) { }

  state: any = {
    id: 0,
    status: false
  }
  isLoggedIn$: any;

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    this.state.id = localStorage.getItem("ID");

    if (localStorage.getItem("Estatus") === "true") {
      this.state.status = true;
    } else {
      this.state.status = false;
    }
    console.log(this.state);
  }
  onLogout() {
    this.authService.logout();                      // {3}
  }
  title = 'AudioVisual';
}
