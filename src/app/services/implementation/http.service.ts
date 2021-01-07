import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(
        private http: HttpClient
    ) {
    }

    get(url: string): Observable<any> {
        return this.http.get(url).pipe(
            catchError( this.handleError )
        );
    }

    post(url: string, requestBody: any): Observable<any> {
        return this.http.post(url, requestBody).pipe(
            catchError( this.handleError )
        );
    }

    put(url: string, requestBody: any): Observable<any> {
        return this.http.put(url, requestBody).pipe(
            catchError( this.handleError )
        );
    }

    handleError( error ): Observable<any> {

        console.error( error );

        let statusCode: number = error.status;

        if(statusCode === 409) {
            alert( error.error.message);
        } else {
            alert('Something went wrong!');
        }

        return of();
    } 

}