import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Thread } from '../Model/thread';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Overwatch } from '../Model/overwatch';
import { notification } from '../Model/notification';


@Injectable({
  providedIn: 'root'
})
export class ForumServiceService {

  // Define API
  apiURL = 'pi/hunterskingdom/web/app_dev.php/api';

  // Http Options
  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };

  constructor(private http: HttpClient) { }


getSubjects(): Observable<Overwatch> {
    return this.http.get<Overwatch>( this.apiURL + '/overwatch')
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}


  getThreads(): Observable<Thread> {
    return this.http.get<Thread>( this.apiURL + '/threadsvalid')
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

getThreadsToValidate(): Observable<Thread> {
    return this.http.get<Thread>( this.apiURL + '/threadstovalidate')
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

createNotif(notif) {
    return this.http.post<notification>(this.apiURL + '/notif/new',  JSON.stringify(notif), this.httpOptions);
}

deleteThread(id) {
    return this.http.delete<Thread>(this.apiURL + '/threads/' + id + '/delete', this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

ignoreSubject(id) {
    return this.http.delete<Overwatch>(this.apiURL + '/overwatch/' + id + '/ignore', this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

deleteSubject(id) {
    console.log(this.apiURL + '/overwatch/' + id + '/delete');
    return this.http.delete<Overwatch>(this.apiURL + '/overwatch/' + id + '/delete', this.httpOptions);
}

validateThread(id) {
    return this.http.delete<Thread>(this.apiURL + '/threads/' + id + '/validate', this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

getThread(id): Observable<Thread> {
    return this.http.get<Thread>(this.apiURL + '/threads/' + id)
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

