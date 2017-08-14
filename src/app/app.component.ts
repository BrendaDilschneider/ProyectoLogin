import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Http } from '@angular/http';
import { NgProgressService } from 'ngx-progressbar';
import { TimerObservableComponent } from './timer-observable/timer-observable.component';

@Component({
  selector: 'pba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  posts:any;
  isLogged:boolean;
  estaCargando:boolean;
  title="Bienvenido";
  i=0;

  constructor(
    public progressService: NgProgressService,
    private http:Http
  )
  {
    
    this.isLogged = false;
    this.estaCargando=false;
  
  }

  ngOnInit(): void {
  }

  login(){
    console.log("Estoy logueado");
    this.estaCargando=true;
    this.cargar_barra();
   
  }

  //No se usa
  logout(){
    this.isLogged=false; 
  }

  cargar_barra(){
    this.progressService.start();
    setTimeout(() => {
      this.progressService.inc(0.2);
    }, 2000);
    setTimeout(()=>{
      this.progressService.done();
      this.estaCargando=false;
      this.isLogged=true;

    },7000);
  }

  
}
