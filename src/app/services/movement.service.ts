import { Observable } from 'rxjs';

import { RegisterMovementRequest } from './request/register-movement.request';
import { RegisterMovementResponse } from './response/register-movement.response';

export abstract class MovementService {

    public abstract registerIncomingMovement(productId: string, request: RegisterMovementRequest): Observable<RegisterMovementResponse> 

    public abstract registerOutgoingMovement(productId: string, request: RegisterMovementRequest): Observable<RegisterMovementResponse> 

}