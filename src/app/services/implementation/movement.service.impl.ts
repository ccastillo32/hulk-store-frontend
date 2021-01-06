import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { MovementService } from "../movement.service";
import { RegisterMovementRequest } from "../request/register-movement.request";
import { RegisterMovementResponse } from "../response/register-movement.response";
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})

export class MovementRestApiService extends MovementService {

    constructor(
        private httpService: HttpService    
    ) {
        super();
    }

    public registerIncomingMovement(productId: string, request: RegisterMovementRequest): Observable<RegisterMovementResponse> {

        return this.registerMovement(productId, request, 'incomings');

    }

    public registerOutgoingMovement(productId: string, request: RegisterMovementRequest): Observable<RegisterMovementResponse> {

        return this.registerMovement(productId, request, 'outgoings');

    }

    private registerMovement(productId: string, request: RegisterMovementRequest, movementType: string): Observable<RegisterMovementResponse> {

        const url: string = `http://localhost:9099/api/movements/${productId}/${movementType}`;

        return this.httpService.post(url, request).pipe(
            map( response => response as RegisterMovementResponse )
        );

    }

}