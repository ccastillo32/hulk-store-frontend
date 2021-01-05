import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { InventoryItem } from "../../model/inventory-item.model";
import { Product } from "../../model/product.model";
import { InventoryService } from "../inventory.service";
import { ProductService } from '../product.service';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})

export class InventoryRestApiService extends InventoryService {

    constructor(
        private productService: ProductService    
    ) {
        super();
    }

    public findAllInventoryItems(): Observable<InventoryItem[]> {

        return this.productService.findAllProducts().pipe(
            map( (allProducts: Product[]) => {

                return allProducts.map((product: Product) => {
                    let item: InventoryItem = new InventoryItem();
                    item.product = product;
                    item.incomings = 0;
                    item.outgoings = 0;
                    return item;
                })

            })
        );

    }

}