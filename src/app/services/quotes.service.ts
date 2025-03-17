import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { QuotesApi } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private url = 'http://localhost:8080/getAllQuotes';
  constructor(private http: HttpClient) { }
  

  getQuotes(): Observable<any>{
    console.log(this.url)
    return this.http.get<QuotesApi>(this.url)
    
  }
}
