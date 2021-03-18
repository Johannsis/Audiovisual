import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor() {}

  state: any = {
    id:0,
    status:false
  }

  ngOnInit(): void {
    this.state.id = localStorage.getItem("ID");

    if(localStorage.getItem("Estatus")==="true"){
      this.state.status = true;
    }else{
      this.state.status = false;
    }
    console.log(this.state);
  }

  title = 'AudioVisual';
}
