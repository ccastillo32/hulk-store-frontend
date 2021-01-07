import { Observable } from 'rxjs';

import { LoginRequest } from './request/login.request';
import { LoginResponse } from './response/login.response';

export abstract class LoginService {

    public abstract login(request: LoginRequest): Observable<LoginResponse>

}