import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterMovementComponent } from './register-movement/register-movement.component';
import { MovementListComponent } from './movement-list/movement-list.component';

@NgModule({
    imports:        [ 
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers:      [],
    declarations:   [ 
        CreateProductComponent,
        ProductListComponent,
        RegisterMovementComponent,
        MovementListComponent
    ],
    exports:        [ 
        CreateProductComponent,
        ProductListComponent,
        RegisterMovementComponent,
        MovementListComponent
    ],
    bootstrap:      []
})

export class ComponentsModule {

}