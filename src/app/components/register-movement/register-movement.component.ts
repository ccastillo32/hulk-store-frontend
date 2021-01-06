import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryItem } from 'src/app/model/inventory-item.model';
import { Product } from 'src/app/model/product.model';
import { RoutingService } from 'src/app/routing/routing.service';

@Component({
    selector: 'register-movement',
    templateUrl: './register-movement.component.html'
})

export class RegisterMovementComponent implements OnInit {

    loading: boolean = false;
    formSubmitted: boolean = false; 
    itemSelected: InventoryItem;
    product: Product;

    registerMovementForm = new FormGroup({
        movementType: new FormControl('INCOMINGS', [Validators.required]),
        code: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
        unitPrice: new FormControl(0, [Validators.required, Validators.min(0)]),
        subTotal: new FormControl(0, [Validators.required, Validators.min(0)]), 
        observation: new FormControl('', []),
    });

    constructor(
        private routingService: RoutingService
    ) {
        this.itemSelected = this.routingService.getNavigationData();
    }

    ngOnInit() {

        if(!this.itemSelected) {
            this.routingService.goToProductList();
        }

        if(this.itemSelected) {
            const product: Product = this.itemSelected.product;
            this.registerMovementForm.controls.code.setValue( product.code );
            this.registerMovementForm.controls.name.setValue( product.name );
            this.registerMovementForm.controls.unitPrice.setValue( product.purchasePrice );
            this.registerMovementForm.controls.quantity.setValue( 0 );
            this.onChangeQuantityOrUnitPrice();
        }
    }

    onchangeMovementType(): void {
        const type = this.registerMovementForm.get('movementType').value;
        if('INCOMINGS' === type) {
            this.registerMovementForm.controls.unitPrice.setValue( this.itemSelected?.product.purchasePrice );
        }
        if('OUTGOINGS' === type) {
            this.registerMovementForm.controls.unitPrice.setValue( this.itemSelected?.product.sellingPrice );
        }
    }

    onChangeQuantityOrUnitPrice(): void {

        const unitPrice: number = this.registerMovementForm.get('unitPrice').value;
        const quantity: number = this.registerMovementForm.get('quantity').value;

        console.log('Price: ' + unitPrice);
        console.log('Quantity: ' + quantity);

        if(unitPrice && quantity) {

            const subTotal: number = unitPrice * quantity;

            this.registerMovementForm.controls.subTotal.setValue( subTotal );

        } else {
            this.registerMovementForm.controls.subTotal.setValue( 0 );
        }

    }

    cancel(): void {
        this.routingService.goToProductList();
    }

    isEmpty(fieldName: string): boolean {
        return this.registerMovementForm.get(fieldName).hasError('required') 
                && (this.registerMovementForm.get(fieldName).touched || this.formSubmitted)
    }

    isNegative(fieldName: string): boolean {
        return this.registerMovementForm.get(fieldName).hasError('min') 
                && (this.registerMovementForm.get(fieldName).touched || this.formSubmitted)
    }

}