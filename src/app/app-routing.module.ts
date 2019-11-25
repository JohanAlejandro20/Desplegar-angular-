import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BooksComponent } from './books/books.component';
import { StudentsComponent } from './students/students.component';
import { AuthorsComponent } from './authors/authors.component';
import { LoansComponent } from './loans/loans.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { CrearPrestamosComponent } from './crear-prestamos/crear-prestamos.component';
import { CrearLibrosComponent } from './crear-libros/crear-libros.component';
import { CrearAutoresComponent } from './crear-autores/crear-autores.component';
import { CrearEstudiantesComponent } from './crear-estudiantes/crear-estudiantes.component';


const routes: Routes = [
{path: 'loans', component: LoansComponent},
{path: 'authors', component: AuthorsComponent},
{path: 'students', component: StudentsComponent},
{path: 'books', component: BooksComponent},
{path: 'crearPrestamos', component:CrearPrestamosComponent},
{path: 'crearLibro', component: CrearLibrosComponent},
{path: 'crearAutor', component: CrearAutoresComponent},
{path: 'crerEstudiante', component: CrearEstudiantesComponent},
{path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
