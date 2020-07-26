import { Categorie } from './../Model/categorie';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  // Define API
  apiURL = '/pi/hunterskingdom/web/app_dev.php/categorie';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>( this.apiURL + '/getall')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createCategorie(categotrie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiURL + '/add', JSON.stringify(categotrie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  deleteCategorie(id) {
    return this.http.delete<Categorie>(this.apiURL + '/delete/' + id , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getCategorie(id): Observable<Categorie> {
    return this.http.get<Categorie>(this.apiURL + '/get/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateCategorie(id, categotrie): Observable<Categorie> {
    return this.http.put<Categorie>(this.apiURL + '/update/' + id  , JSON.stringify(categotrie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
