import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { ProductService } from "../product.service";
import { CreateProductRequest } from '../request/create-product.request';
import { CreateProductResponse } from '../response/create-product.response';
import { Product } from 'src/app/model/product.model';

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

    findAllProducts(): Observable<Product[]> {

        const url: string = 'http://localhost:9099/api/products';

        return this.httpService.get(url).pipe(
            map((response: any) => response.products as Product[])
        );

    }

    findById(productId: string): Observable<Product> {

        const url: string = `http://localhost:9099/api/products/${productId}`;

        return this.httpService.get(url);

    }

}