import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterMovementComponent } from './register-movement/register-movement.component';

@NgModule({
    imports:        [ 
        BrowserModule,
        ReactiveFormsModule
    ],
    providers:      [],
    declarations:   [ 
        CreateProductComponent,
        ProductListComponent,
        RegisterMovementComponent
    ],
    exports:        [ 
        CreateProductComponent,
        ProductListComponent,
        RegisterMovementComponent
    ],
    bootstrap:      []
})

export class ComponentsModule {

}