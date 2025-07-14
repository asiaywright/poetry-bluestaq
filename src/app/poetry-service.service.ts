import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PoetryServiceService {

  private poteryApiUrl = 'https://poetrydb.org/author';

  constructor(private http: HttpClient) {}

  // API call that returns all authors throw error if 200 response is not recived 

  fetchAuthors(): Observable<any[]> {
    return this.http.get<any[]>(this.poteryApiUrl).pipe(
      catchError(error => {
        console.error('Error fetching authors:', error);
        return throwError(() => new Error(error.message || 'Request failed'));
      })
    );
  }

  // API call that returns all titles wrtiten by specfic author throw error if 200 response is not recived 
  fetchTitle(authorName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.poteryApiUrl}/${authorName}/title`).pipe(
      catchError(error => {
        console.error(`Error fetching titles for ${authorName}:`, error);
        return throwError(() => new Error(error.message || 'Request failed'));
      })
    );
  }
}
