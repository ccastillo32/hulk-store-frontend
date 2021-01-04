import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { ProductService } from "../product.service";
import { CreateProductRequest } from '../request/create-product.request';
import { CreateProductResponse } from '../response/create-product.response';

@Injectable({
    providedIn: 'root'
})

export class ProductRestApiService extends ProductService {

    constructor(private httpService: HttpService) {
        super();
    }

    saveProduct(request: CreateProductRequest): Observable<CreateProductResponse> {

        const url: string = 'http://localhost:9099/api/products';

        return this.httpService.post(url, request).pipe(
            map((response: any) => response as CreateProductResponse)
        )

    }

}