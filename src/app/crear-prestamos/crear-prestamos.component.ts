import { Component, OnInit } from '@angular/core';
import { BibliotecaApiService } from '../services/biblioteca-api.service';

@Component({
  selector: 'app-crear-prestamos',
  templateUrl: './crear-prestamos.component.html',
  styleUrls: ['./crear-prestamos.component.css']
})
export class CrearPrestamosComponent implements OnInit {
  informacion: any[] = [];
  students: any[] = [];
  libros:any[] = [];
  studentsInput:string;
  librosInput:string;

  constructor(private servicio:BibliotecaApiService) {
    this.cargarDatos()
  }

  ngOnInit() {
  }

  cargarDatos(){
    this.servicio.getPrestamo().subscribe( (data:any)=>{
      this.informacion = data;
      this.cargarAutores();
      this.cargarLibro();
      console.log(this.informacion[0].nom_book);
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }

  cargarAutores(){
    this.servicio.getStudents().subscribe( (data:any)=>{
      this.students = data;
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }

  cargarLibro(){
    this.servicio.getBooks().subscribe( (data:any)=>{
      this.libros = data;
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }

  crearPrestamos(){
    this.servicio.postLoans(parseInt(this.studentsInput),parseInt(this.librosInput)).subscribe( (data:any)=>{
      this.cargarDatos();
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }
  eliminarLoan(index:number){
    this.servicio.deleteLoan(this.informacion[index].id).subscribe((data:any)=>{
      this.cargarDatos();
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
    this.cargarDatos();
  }
  

}

