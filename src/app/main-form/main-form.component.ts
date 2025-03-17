import { Component } from '@angular/core';
import { QuotesService } from '../services/quotes.service';
import { QuotesApi } from '../models/quote';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-form',
  imports: [CommonModule],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css',
})
export class MainFormComponent {
  quotes: any[] = [];

  constructor(private QuotesService: QuotesService){}

  ngOnInit(){
    this.QuotesService.getQuotes().subscribe((data)=>{
      this.quotes = data;
    });
  }
}
