import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterMovementComponent } from './register-movement/register-movement.component';
import { MovementListComponent } from './movement-list/movement-list.component';
import { LoginComponent } from './login/login.component';

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
        MovementListComponent,
        LoginComponent
    ],
    exports:        [ 
        CreateProductComponent,
        ProductListComponent,
        RegisterMovementComponent,
        MovementListComponent,
        LoginComponent
    ],
    bootstrap:      []
})

export class ComponentsModule {

}