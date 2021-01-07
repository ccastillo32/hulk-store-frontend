import { Observable } from "rxjs";

import { CreateProductRequest } from "./request/create-product.request";
import { CreateProductResponse } from './response/create-product.response';
import { Product } from '../model/product.model';
import { UpdateProductRequest } from './request/update-product.request';
import { UpdateProductResponse } from './response/update-product.response';

export abstract class ProductService {
    
    abstract saveProduct(request: CreateProductRequest): Observable<CreateProductResponse>;

    abstract findAllProducts(): Observable<Product[]>;

    abstract findById(productId: string): Observable<Product>

    abstract updateProduct(productId: string, request: UpdateProductRequest): Observable<UpdateProductResponse>;

}