import { Component, OnInit } from '@angular/core';
import {PoetryServiceService} from '../poetry-service.service';

@Component({
  selector: 'app-display-author',
  templateUrl: './display-author.component.html',
  styleUrls: ['./display-author.component.css']
})
export class DisplayAuthorComponent {

  authors: any[] = [];
  filteredAuthors: string[] = [];
  searchText: string = '';
  authorPressed: boolean = false;
  selectedAuthor: string ='';
  searchPressed: number =0;

  constructor(private poetryService: PoetryServiceService){}

  ngOnInit(): void {

    //upon app loading  the api route is called to return all authors
  this.poetryService.fetchAuthors().subscribe(
    (response: any) => {

      this.authors = response.authors; 
      this.filteredAuthors = [...this.authors];
      console.log('Fetched authors:', this.authors);
    },
    (error: any) => {
      console.error('Error fetching authors:', error);
    }
  );

}


searchAuthors(): void {
  this.searchPressed ++;
    const query = this.searchText.toLowerCase().trim();
    this.filteredAuthors = this.authors.filter(author =>
      author.toLowerCase().includes(query)
    );

  if (!query) {
  this.filteredAuthors = this.authors;
  this.searchPressed=0;
  return;
}
  }

  allAuthors(): void{
    //set the search value as empty and unused and return the user to start page
    this.filteredAuthors =this.authors;
    this.searchPressed=0;
  }

authorSelected(author: string): void{
  // will naviagte user to the display-title component 
  this.authorPressed= true;
  this.selectedAuthor = author;
  console.log("Selected author: ", author);

  
}

//return user from the display title component to the the start page
handleViewAuthorsBtn():void {
  this.authorPressed = false;
  this.selectedAuthor = '';
  this.searchText = '';
  this.filteredAuthors = [...this.authors];
  console.log('Back to author list');
 
}


}

