import { Component } from '@angular/core';
import { quotesService } from '../services/quotes.service';
import { QuotesApi } from '../models/quote';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-form',
  imports: [CommonModule],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css',
})
export class MainFormComponent {
  quotes$: QuotesApi | null = null;
  
  constructor(private quotesService: quotesService){

    this.quotesService.getLastQuote().subscribe(data => {
      this.quotes = data; // Guardas la respuesta en la variable
  });
  }
}
