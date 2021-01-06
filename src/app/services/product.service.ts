import { Observable } from "rxjs";

import { CreateProductRequest } from "./request/create-product.request";
import { CreateProductResponse } from './response/create-product.response';
import { Product } from '../model/product.model';

export abstract class ProductService {
    
    abstract saveProduct(request: CreateProductRequest): Observable<CreateProductResponse>;

    abstract findAllProducts(): Observable<Product[]>;

    abstract findById(productId: string): Observable<Product>

}