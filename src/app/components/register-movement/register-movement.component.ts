import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryItem } from 'src/app/model/inventory-item.model';
import { RoutingService } from 'src/app/routing/routing.service';

@Component({
    selector: 'register-movement',
    templateUrl: './register-movement.component.html'
})

export class RegisterMovementComponent implements OnInit {

    loading: boolean = false;
    formSubmitted: boolean = false;

    registerMovementForm = new FormGroup({
        code: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        quantity: new FormControl(0, [Validators.required]),
        unitPrice: new FormControl(0, [Validators.required]),
        subTotal: new FormControl(0, [Validators.required]), 
        observation: new FormControl('', []),
    });

    constructor(
        private routingService: RoutingService
    ) {}

    ngOnInit() {
         
    }

    cancel(): void {
        this.routingService.goToProductList();
    }

    isEmpty(fieldName: string): boolean {
        return this.registerMovementForm.get(fieldName).hasError('required') 
                && (this.registerMovementForm.get(fieldName).touched || this.formSubmitted)
    }

    isNotGreaterThanZero(fieldName: string): boolean {
        return this.registerMovementForm.get(fieldName).hasError('min') 
                && (this.registerMovementForm.get(fieldName).touched || this.formSubmitted)
    }

}