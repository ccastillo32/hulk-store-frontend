import { Observable } from "rxjs";
import { CreateProductRequest } from "./request/create-product.request";
import { CreateProductResponse } from './response/create-product.response';

export abstract class ProductService {
    
    abstract saveProduct(request: CreateProductRequest): Observable<CreateProductResponse>;

}