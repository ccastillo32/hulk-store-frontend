import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing/routing.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {

    constructor(
        private routingService: RoutingService
    ) {}

    ngOnInit(): void {
    }

    goToCreateProduct(): void {
        this.routingService.goToCreateProduct();
    }

}