import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Buy} from '../Model/buy';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  // Define API
  apiURL = 'pi/hunterskingdom/web/app_dev.php/api';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Buy> {
    return this.http.get<Buy>( this.apiURL + '/buys')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  createOffre(buy): Observable<Buy> {
    return this.http.post<Buy>(this.apiURL + '/buy/new', JSON.stringify(buy), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  deleteProduct(id) {
    return this.http.delete<Buy>(this.apiURL + '/buy/' + id + '/delete', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getProduct(id): Observable<Buy> {
    return this.http.get<Buy>(this.apiURL + '/buy/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateProduct(id, buy): Observable<Buy> {
    return this.http.put<Buy>(this.apiURL + '/buy/' + id + '/edit' , JSON.stringify(buy), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  // Error handling
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
  getByCategorie(categorie): Observable<Buy> {
    return this.http.get<Buy>( this.apiURL + '/buy/categories/' + categorie)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
