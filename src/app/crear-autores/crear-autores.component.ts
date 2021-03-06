import { Component, OnInit } from '@angular/core';
import { BibliotecaApiService } from '../services/biblioteca-api.service';

@Component({
  selector: 'app-crear-autores',
  templateUrl: './crear-autores.component.html',
  styleUrls: ['./crear-autores.component.css']
})
export class CrearAutoresComponent implements OnInit {

  informacion: any[] = [];
  autores: any[] = [];
  autor:string;

  constructor(private servicio:BibliotecaApiService) {
    this.cargarDatos()
  }

  ngOnInit() {
  }

  cargarDatos(){
    this.servicio.getAuthors().subscribe( (data:any)=>{
      this.informacion = data;
      console.log(this.informacion[0].nom_book);
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }

  crearAutor(){
    this.servicio.postAuthor(this.autor).subscribe((data:any)=>{
      this.cargarDatos();
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }

  eliminarAutor(index:number){
    this.servicio.deleteAuthor(this.informacion[index].id).subscribe((data:any)=>{
      this.cargarDatos();
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
    this.cargarDatos();
  }

    

}

