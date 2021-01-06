import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingService } from './routing.service';

import { CreateProductComponent } from '../components/create-product/create-product.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { RegisterMovementComponent } from '../components/register-movement/register-movement.component';

const routes: Routes = [
    {path: 'create-product', component: CreateProductComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'register-movement', component: RegisterMovementComponent},
    {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
    imports:        [ CommonModule, RouterModule.forRoot(routes) ],
    providers:      [ RoutingService ],
    declarations:   [],
    exports:        [],
    bootstrap:      []
})

export class RoutingModule {
}