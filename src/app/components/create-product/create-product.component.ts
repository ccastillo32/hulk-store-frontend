import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoutingService } from 'src/app/routing/routing.service';
import { CategoryService } from 'src/app/services/category.service';
import { FranchiseService } from 'src/app/services/franchise.service';
import { ProductService } from 'src/app/services/product.service';
import { CreateProductRequest } from 'src/app/services/request/create-product.request';
import { CreateProductResponse } from 'src/app/services/response/create-product.response';

import { Category } from '../../model/category.model';
import { Franchise } from '../../model/franchise.model';

@Component({
    selector: 'create-product',
    templateUrl: './create-product.component.html'
})

export class CreateProductComponent implements OnInit {

    formSubmitted: boolean = false;
    loading: boolean = false;

    categories: Category[] = [];
    franchises: Franchise[] = [];

    createProductForm = new FormGroup({
        code: new FormControl(this.generateRandomCode(), [Validators.required]),
        name: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        franchise: new FormControl('', [Validators.required]),
        purchasePrice: new FormControl(0, [Validators.required, Validators.min(1)]),
        sellingPrice: new FormControl(0, [Validators.required, Validators.min(1)])
    });

    constructor(
        private categoryService: CategoryService,
        private franchiseService: FranchiseService,
        private productService: ProductService,
        private routingService: RoutingService
    ) {
    }

    ngOnInit(): void {
        this.findAllCategories();
        this.findAllFranchises();
    }

    isEmpty(fieldName: string): boolean {
        return this.createProductForm.get(fieldName).hasError('required') 
                && (this.createProductForm.get(fieldName).touched || this.formSubmitted)
    }

    isNotGreaterThanZero(fieldName: string): boolean {
        return this.createProductForm.get(fieldName).hasError('min') 
                && (this.createProductForm.get(fieldName).touched || this.formSubmitted)
    }

    saveProduct(): void {

        this.formSubmitted = true;
        this.loading = true;

        if(this.createProductForm.valid) {
            const request: CreateProductRequest = this.convertFormDataToRequest();
            this.productService.saveProduct(request).subscribe(
                (response: CreateProductResponse) => {
                    console.log( response.id );

                    this.showAlertInfo('Producto creado exitosamente.');

                }
            ).add( () => this.loading = false )
        }

    }

    goToProductList(): void {
        this.routingService.goToProductList()
    }

    private generateRandomCode(): string {
        return Math.random().toString(36).substring(7).toUpperCase();
    }

    private findAllCategories(): void {
        this.loading = true;
        this.categoryService.findAllCategories().subscribe(
            (categories: Category[]) => { 
                this.categories = categories;
            }
        ).add( () => this.loading = false );
    }

    private findAllFranchises(): void {
        this.franchiseService.findAllFranchises().subscribe(
            (franchises: Franchise[]) => { 
                this.franchises = franchises;
            }
        ).add( () => this.loading = false );
    }

    private convertFormDataToRequest(): CreateProductRequest {
        let request: CreateProductRequest = new CreateProductRequest();
        request.code = this.createProductForm.get('code').value;
        request.name = this.createProductForm.get('name').value;
        request.purchasePrice = this.createProductForm.get('purchasePrice').value;
        request.sellingPrice = this.createProductForm.get('sellingPrice').value;
        request.categoryId = this.createProductForm.get('category').value;
        request.franchiseId = this.createProductForm.get('franchise').value;
        return request;
    }

    private showAlertInfo(message: string): void {
        alert(message);
    }

}