import { Component, OnInit } from '@angular/core';
import { BibliotecaApiService } from '../services/biblioteca-api.service'; 

@Component({
  selector: 'app-crear-libros',
  templateUrl: './crear-libros.component.html',
  styleUrls: ['./crear-libros.component.css']
})
export class CrearLibrosComponent implements OnInit {

  informacion: any[] = [];
  autores: any[] = [];
  nombreLInput:string;
  codigoAInput:number;

  constructor(private servicio:BibliotecaApiService) {
    this.cargarDatos()
  }

  ngOnInit() {
  }

  cargarDatos(){
    this.servicio.getBooks().subscribe( (data:any)=>{
      this.informacion = data;
      this.cargarAutores();
      console.log(this.informacion);
      this.informacion.forEach(libro => console.log(libro.autor));
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }

    cargarAutores(){
      this.servicio.getAuthors().subscribe( (data:any)=>{
        this.autores = data;
      }, ( errorServicio )=> {
        console.log(errorServicio.error.error.message);
      });
    }

  crearLibros(){
    this.servicio.postBooks(this.nombreLInput,this.codigoAInput).subscribe( (data:any)=>{
      console.log(this.cargarDatos());
      this.cargarDatos();
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }
}
