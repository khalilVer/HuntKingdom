import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Sell} from '../Model/sell';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  // Define API
  apiURL = 'pi/hunterskingdom/web/app_dev.php/api';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Sell> {
    return this.http.get<Sell>( this.apiURL + '/sells')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  createOffre(sell): Observable<Sell> {
    return this.http.post<Sell>(this.apiURL + '/sell/new', JSON.stringify(sell), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  deleteProduct(id) {
    return this.http.delete<Sell>(this.apiURL + '/sell/' + id + '/delete', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getProduct(id): Observable<Sell> {
    return this.http.get<Sell>(this.apiURL + '/sell/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateProduct(id, sell): Observable<Sell> {
    return this.http.put<Sell>(this.apiURL + '/sell/' + id + '/edit' , JSON.stringify(sell), this.httpOptions)
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
}
