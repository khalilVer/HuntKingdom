import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Thread } from '../Model/thread';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Overwatch } from '../Model/overwatch';
import { notification } from '../Model/notification';
import { threaddetail } from '../Model/threaddetail';
import { report } from '../Model/report';



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
        return this.http.get<Overwatch>(this.apiURL + '/overwatch')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }


    getThreads(): Observable<Thread> {
        return this.http.get<Thread>(this.apiURL + '/threadsvalid')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    getComments(threadid): Observable<threaddetail> {
        return this.http.get<threaddetail>(this.apiURL + '/threadcomments/' + threadid)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    getThreadsToValidate(): Observable<Thread> {
        return this.http.get<Thread>(this.apiURL + '/threadstovalidate')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    createNotif(notif) {
        return this.http.post<notification>(this.apiURL + '/notif/new', JSON.stringify(notif), this.httpOptions);
    }
    submitReport(report) {
        return this.http.post<Overwatch>(this.apiURL + '/overwatchreport/new', JSON.stringify(report), this.httpOptions);
    }

    submitUserReport(report) {
        return this.http.post<report>(this.apiURL + '/userreport/new', JSON.stringify(report), this.httpOptions);
    }


    createThreaddetail(detail) {
        return this.http.post<threaddetail>(this.apiURL + '/threaddetail/new', JSON.stringify(detail), this.httpOptions);
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

    checkVote(user,threadid): Observable<Thread> {
        return null;
    }


    checkThreadReport(user,threadid,subjecttype): Observable<report> {
        return this.http.get<report>(this.apiURL + '/checkreport/' + threadid + '/' + user + '/' + subjecttype)
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

