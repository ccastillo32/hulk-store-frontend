import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    imports:        [ 
        BrowserModule,
        ReactiveFormsModule
    ],
    providers:      [],
    declarations:   [ 
        CreateProductComponent,
        ProductListComponent
    ],
    exports:        [ 
        CreateProductComponent,
        ProductListComponent
    ],
    bootstrap:      []
})

export class ComponentsModule {

}