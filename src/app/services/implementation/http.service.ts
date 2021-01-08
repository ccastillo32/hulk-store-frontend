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

            const code: string = error.error.code;
            let message: string = error.error.message;

            if('BAD_CREDENTIALS' === code) {
                message = 'El usuario o la contraseña son incorrectos';
            } else if('USERNAME_ALREADY_EXISTS' === code) {
                message = 'El username ya se encuentra registrado. Por favor ingrese uno diferente';
            } else if('PRODUCT_WITHOUT_STOCK' === code) {
                message = 'El producto no cuenta con suficiente stock para poder realizar este movimiento';
            } else if('PRODUCT_CODE_ALREADY_EXISTS' === code) {
                message = 'El código del producto ya se encuentra registrado. Por favor ingrese uno diferente';
            }

            alert( message );
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