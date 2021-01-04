import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
    imports:        [ 
        BrowserModule,
        ReactiveFormsModule
    ],
    providers:      [],
    declarations:   [ 
        CreateProductComponent 
    ],
    exports:        [ 
        CreateProductComponent 
    ],
    bootstrap:      []
})

export class ComponentsModule {

}