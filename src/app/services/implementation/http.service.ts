import { HttpClient, HttpHeaders } from "@angular/common/http";
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

    get(url: string, needsAuthorization?: boolean): Observable<any> {
        
        const headers: any = this.getHeaders(needsAuthorization); 

        return this.http.get( url , headers).pipe(
            catchError( this.handleError )
        );
    }

    post(url: string, requestBody: any, needsAuthorization?: boolean): Observable<any> {
        const headers: any = this.getHeaders(needsAuthorization);
        return this.http.post(url, requestBody, headers).pipe(
            catchError( this.handleError )
        );
    }

    put(url: string, requestBody: any, needsAuthorization?: boolean): Observable<any> {
        const headers: any = this.getHeaders(needsAuthorization);
        return this.http.put(url, requestBody, headers).pipe(
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

    getHeaders(needsAuthorization: boolean): any {

        let header = null;

        if(needsAuthorization) {
            const token = sessionStorage.getItem('token');
            header = new HttpHeaders({ "Authorization": token});
        } else {
            header = new HttpHeaders({});
        }

        return {  headers: header }

    }

}