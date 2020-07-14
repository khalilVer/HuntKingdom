import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Commande} from '../Model/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {

    // Define API
    apiURL = 'pi/hunterskingdom/web/app_dev.php/api';

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }
    getCommandes(): Observable<Commande> {
        return this.http.get<Commande>( this.apiURL + '/commandes')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    createCommande(commande): Observable<Commande> {
        return this.http.post<Commande>(this.apiURL + '/commandes/new', JSON.stringify(commande), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    deleteCommande(id) {
        return this.http.delete<Commande>(this.apiURL + '/commandes/' + id + '/delete', this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    getCommande(id): Observable<Commande> {
        return this.http.get<Commande>(this.apiURL + '/commandes/' + id)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    validateCommande(id, commande): Observable<Commande> {
        return this.http.put<Commande>(this.apiURL + '/commandes/' + id + '/validate' , JSON.stringify(commande), this.httpOptions)
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
