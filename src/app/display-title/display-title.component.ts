import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PoetryServiceService } from '../poetry-service.service';

@Component({
  selector: 'app-display-title',
  templateUrl: './display-title.component.html',
  styleUrls: ['./display-title.component.css']
})
export class DisplayTitleComponent {
titles: any[] = [];

@Input() selectedAuthor: string = '';
@Output() backBtn = new EventEmitter<void>();

  constructor(private poetryService: PoetryServiceService) {}

  ngOnInit(): void {
    //return author titles upon component being started  
    if (this.selectedAuthor) {
      this.fetchTitlesForAuthor();
    }
  }

  //API route is called and return list of title that author has writen
  fetchTitlesForAuthor(): void {
    this.poetryService.fetchTitle(this.selectedAuthor).subscribe(
      (response: any) => {
        this.titles = response.titles || response;
        console.log('Fetched titles:', this.titles);
      },
      (error: any) => {
        console.error('Error fetching titles:', error);
      }
    );
  }

  //handle back button functionality 
  backToAuthors(): void {
    this.backBtn.emit();
  }
}
