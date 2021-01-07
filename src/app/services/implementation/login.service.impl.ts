import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { LoginRequest } from '../request/login.request';
import { LoginResponse } from '../response/login.response';
import { LoginService } from "../login.service";
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class LoginRestApiService extends LoginService {

    constructor(
        private httpService: HttpService
    ) {
        super();
    }

    public login(request: LoginRequest): Observable<LoginResponse> {

        const url: string = 'http://localhost:9099/api/auth/login';

        return this.httpService.post(url, request).pipe(
            map((response: any) => response as LoginResponse)
        )

    }

}