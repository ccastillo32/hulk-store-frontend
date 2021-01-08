import { Component, OnInit } from '@angular/core';
import { Franchise } from 'src/app/model/franchise.model';
import { Product } from 'src/app/model/product.model';

import { RoutingService } from 'src/app/routing/routing.service';
import { FranchiseService } from 'src/app/services/franchise.service';
import { FilterOptions } from 'src/app/services/request/filter-options.request';
import { InventoryItem } from '../../model/inventory-item.model';
import { InventoryService } from '../../services/inventory.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {

    inventoryItems: InventoryItem[] = [];
    franchises: Franchise[] = [];
    selectedFranchiseId: string;

    loading: boolean = false;

    constructor(
        private routingService: RoutingService,
        private inventoryService: InventoryService,
        private franchiseService: FranchiseService
    ) {}

    ngOnInit(): void {
        this.findAllInventoryItems();
        this.findAllFranchises();
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

    onChangeSelectedFranchise(): void {

        this.findAllInventoryItems();

    }

    private findAllInventoryItems(): void {

        this.loading = true;

        let filter: FilterOptions = null;

        if(this.selectedFranchiseId) {
            filter = new FilterOptions();
            filter.franchiseId = this.selectedFranchiseId;
        } 

        this.inventoryService.findAllInventoryItems(filter).subscribe(
            (response: InventoryItem[]) => {
                this.inventoryItems = response;
            }
        ).add( () => this.loading = false );

    }

    private findAllFranchises(): void {

        this.loading = true;

        this.franchiseService.findAllFranchises().subscribe(
            (response: Franchise[]) => this.franchises = response
        ).add( () => this.loading = false );

    }

}