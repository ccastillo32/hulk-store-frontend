import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

import { RoutingService } from 'src/app/routing/routing.service';
import { InventoryItem } from '../../model/inventory-item.model';
import { InventoryService } from '../../services/inventory.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {

    inventoryItems: InventoryItem[] = [];

    loading: boolean = false;

    constructor(
        private routingService: RoutingService,
        private inventoryService: InventoryService
    ) {}

    ngOnInit(): void {
        this.findAllInventoryItems();
    }

    goToCreateProduct(): void {
        this.routingService.goToCreateProduct();
    }

    goToRegisterMovement(itemSelected: InventoryItem): void {
        this.routingService.goToRegisterMovement(itemSelected);
    }

    goToMovementList(): void {
        this.routingService.goToMovementList();
    }

    goToEditProduct(product: Product): void {
        this.routingService.goToEditProduct(product);
    }

    private findAllInventoryItems(): void {

        this.loading = true;

        this.inventoryService.findAllInventoryItems().subscribe(
            (response: InventoryItem[]) => {
                this.inventoryItems = response;
            }
        ).add( () => this.loading = false );

    }

}