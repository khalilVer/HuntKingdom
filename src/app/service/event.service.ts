import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { Event } from '../Model/event';
@Injectable({
  providedIn: 'root'
})
export class EventService {

   // Define API
   apiURL = 'http://localhost/PI/HuntersKingdom/web/app_dev.php/event';

   // Http Options
   httpOptions = {
       headers: new HttpHeaders({
           'Content-Type': 'application/json'
       })
   };

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

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>( this.apiURL +'/getall')
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}



getEvent(id): Observable<Event> {
    return this.http.get<Event>(this.apiURL + '/get/' + id)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

likeEvent(event: Event) {
    return this.http.put(this.apiURL + '/like/' + event.id, {})
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}
dislikeEvent(event: Event) {
    return this.http.put(this.apiURL + '/disike/' + event.id, {})
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}




}
