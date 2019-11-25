import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceAutor } from '../interface-autor';
import {InterfaceLoans} from '../interface-loans';
import{InterfaceStudents} from "../interface-students";
import{InterfaceBooks} from "../interface-books";
@Injectable({
  providedIn: 'root'
})
export class BibliotecaApiService {

  autor:InterfaceAutor;
  loan:InterfaceLoans;
  student: InterfaceStudents;
  books:InterfaceBooks;

  

  constructor(private http:HttpClient) { }

  getQuery( query:string ){
    const url = `http://localhost:3000/${ query }`;
    return this.http.get(url);
  }

  postAuthor( nombre:string ){
    this.autor = {"nom_author":nombre};
    const url = `http://localhost:3000/authors`;
    return this.http.post(url,this.autor);
  }

  postLoans( codigoS:number,codigoL:number ){
    this.loan = {"Student_id":codigoS,"Book_id":codigoL};
    const url = `http://localhost:3000/loans`;
    return this.http.post(url,this.loan);
  }

  postStudent( nombre:String ){
    this.student = {"nom_student":nombre};
    const url = `http://localhost:3000/students`;
    return this.http.post(url,this.student);
  }
  
  postBooks( nombreL:string,codigoA:number ){
    this.books = {"nom_book":nombreL,"Author_id":codigoA};
    const url = `http://localhost:3000/books`;
    return this.http.post(url,this.books);
  }


  deleteAuthor(index:number){
    const url = `http://localhost:3000/authors/${index}`;
    return this.http.delete(url);
  }

  deleteStudent(index:number){
    const url = `http://localhost:3000/students/${index}`;
    return this.http.delete(url);
  }


  deleteLoan(index:number){
    const url = `http://localhost:3000/loans/${index}`;
    return this.http.delete(url);
  }


  getBooks(){
    return this.getQuery('books');
  }

  getAuthors(){
    return this.getQuery('authors');
  }

  getStudents(){
    return this.getQuery('students');
  }

  getPrestamo(){
    return this.getQuery('loans');
  }
}
