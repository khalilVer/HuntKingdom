import { Reservation } from './../Model/reservation';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // Define API
  apiURL = '/pi/hunterskingdom/web/app_dev.php/Reservation';

  // Http Options
  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };

 constructor(private http: HttpClient) { }

 getReservations(): Observable<any[]> {
   return this.http.get<any[]>( this.apiURL + '/getall')
       .pipe(
           retry(1),
           catchError(this.handleError)
       );
}

createReservation(reservation): Observable<Reservation> {
   return this.http.post<Reservation>(this.apiURL + '/add', JSON.stringify(reservation), this.httpOptions)
       .pipe(
           retry(1),
           catchError(this.handleError)
       );
}
deleteReservation(id) {
   return this.http.delete<Reservation>(this.apiURL + '/delete/' + id , this.httpOptions)
       .pipe(
           retry(1),
           catchError(this.handleError)
       );
}

getReservation(id): Observable<Reservation> {
   return this.http.get<Reservation>(this.apiURL + '/get/' + id)
       .pipe(
           retry(1),
           catchError(this.handleError)
       );
}

updateCategorie(id, reservation): Observable<Reservation> {
   return this.http.put<Reservation>(this.apiURL + '/update/' + id  , JSON.stringify(reservation), this.httpOptions)
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
