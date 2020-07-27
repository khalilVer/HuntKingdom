import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Thread } from '../Model/thread';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ThreadServiceService {

  // Define API
  apiURL = 'pi/hunterskingdom/web/app_dev.php/api';

  // Http Options
  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };

  constructor(private http: HttpClient) { }

  createThread(thread): Observable<Thread> {
    return this.http.post<Thread>(this.apiURL + '/threads/new', JSON.stringify(thread), this.httpOptions);
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
