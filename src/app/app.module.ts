import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HomePageComponent } from './home-page/home-page.component';

import { BibliotecaApiService } from './services/biblioteca-api.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './students/students.component';
import { AuthorsComponent } from './authors/authors.component';
import { LoansComponent } from './loans/loans.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { CrearPrestamosComponent } from './crear-prestamos/crear-prestamos.component';
import { CrearLibrosComponent } from './crear-libros/crear-libros.component';
import { CrearAutoresComponent } from './crear-autores/crear-autores.component';
import { CrearEstudiantesComponent } from './crear-estudiantes/crear-estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HomePageComponent,
    StudentsComponent,
    AuthorsComponent,
    LoansComponent,
    AddBooksComponent,
    CrearPrestamosComponent,
    CrearLibrosComponent,
    CrearAutoresComponent,
    CrearEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BibliotecaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
