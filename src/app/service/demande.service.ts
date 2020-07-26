import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Demande} from '../Model/demande';

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
  getDemandes(): Observable<Demande> {
    return this.http.get<Demande>( this.apiURL + '/demandes')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  createDemande(demande): Observable<Demande> {
    return this.http.post<Demande>(this.apiURL + '/demandes/new', JSON.stringify(demande), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  deleteDemande(id) {
    return this.http.delete<Demande>(this.apiURL + '/demandes/' + id + '/delete', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getDemande(id): Observable<Demande> {
    return this.http.get<Demande>(this.apiURL + '/demandes/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateDemande(id, demande): Observable<Demande> {
    return this.http.put<Demande>(this.apiURL + '/demandes/' + id + '/edit' , JSON.stringify(demande), this.httpOptions)
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
