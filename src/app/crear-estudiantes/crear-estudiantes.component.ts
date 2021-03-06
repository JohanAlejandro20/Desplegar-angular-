import { Component, OnInit } from '@angular/core';
import { BibliotecaApiService } from '../services/biblioteca-api.service';

@Component({
  selector: 'app-crear-estudiantes',
  templateUrl: './crear-estudiantes.component.html',
  styleUrls: ['./crear-estudiantes.component.css']
})
export class CrearEstudiantesComponent implements OnInit {

  informacion: any[] = [];
  autores: any[] = [];
  nombreInput:string;

  constructor(private servicio:BibliotecaApiService) {
    this.cargarDatos()
  }

  ngOnInit() {
  }

  cargarDatos(){
    this.servicio.getStudents().subscribe( (data:any)=>{
      this.informacion = data;
      console.log(this.informacion[0].nom_student);
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }

  crearEstudiantes(){
    this.servicio.postStudent(this.nombreInput).subscribe( (data:any)=>{
      this.cargarDatos();
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }

  eliminarStudent(index:number){
    this.servicio.deleteStudent(this.informacion[index].id).subscribe((data:any)=>{
      this.cargarDatos();
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
    this.cargarDatos();
  }

}
