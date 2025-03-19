import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { QuotesApi } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
//Acordarse de cambiar la url a la ruta establecida donde suba mi aplicación de spring
export class QuotesService {
  constructor(private http: HttpClient) { }

  getQuotes(): Observable<QuotesApi[]>{
    return this.http.get<QuotesApi[]>('http://localhost:8080/getAllQuotes')
  }

  getLastQuote(): Observable<QuotesApi>{
    return this.http.get<QuotesApi>('http://localhost:8080/getLastQuote')
  }

  getQuoteById(id: String): Observable<QuotesApi>{
    return this.http.get<QuotesApi>('http://localhost:8080/getQuote/' + id)
  }

  //Cuidado con la repetición de información, hay que poner un break
  postQuote(quote: String): void{
    this.http.post('http://localhost:8080/postQuote', quote)
  }

  deleteQuoteById(id: String){
    this.http.delete('http://localhost:8080/deleteQuoteById/' + id)
  }

  addLike(id: String){
    this.http.put('http://localhost:8080/addLike/' + id, null)
  }

  removeLike(id: String){
    this.http.put('http://localhost:8080/removeLike/' + id, null)
  }

  addDislike(id: String){
    this.http.put('http://localhost:8080/addDislike/' + id, null)
  }

  removeDislike(id: String){
    this.http.put('http://localhost:8080/removeDislike/' + id, null)
  }
}
