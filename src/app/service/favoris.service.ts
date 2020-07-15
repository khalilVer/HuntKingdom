import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Favoris} from '../Model/favoris';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

    // Define API
    apiURL = 'pi/hunterskingdom/web/app_dev.php/api';

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }
    getFavorisByUser(id): Observable<Favoris> {
        return this.http.get<Favoris>(this.apiURL + '/favoris/' + id + '/products')
            .pipe(
                retry(1)
            );
    }
    createFavoris(favoris): Observable<Favoris> {
        return this.http.post<Favoris>(this.apiURL + '/favoris/new', JSON.stringify(favoris), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    deleteFavoris(id) {
        return this.http.delete<Favoris>(this.apiURL + '/favoris/' + id + '/delete', this.httpOptions)
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
