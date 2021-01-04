import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
    imports:        [ 
        BrowserModule 
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