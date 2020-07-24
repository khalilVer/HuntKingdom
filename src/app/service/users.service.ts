import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Users} from '../Model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
// Define API
    apiURL = 'pi/hunterskingdom/web/app_dev.php/api';
    user: Users = new Users();

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }
    getUser(username): Observable<Users> {
        return this.http.get<Users>(this.apiURL + '/users/' + username)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    setUserSession(user) {
      this.user = user;
    }
    getUserSession(user): Users {
        return this.user;
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
