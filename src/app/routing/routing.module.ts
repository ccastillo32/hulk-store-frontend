import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingService } from './routing.service';

import { CreateProductComponent } from '../components/create-product/create-product.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { RegisterMovementComponent } from '../components/register-movement/register-movement.component';
import { MovementListComponent } from '../components/movement-list/movement-list.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
    {path: 'create-product', component: CreateProductComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'register-movement', component: RegisterMovementComponent},
    {path: 'movement-list', component: MovementListComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: '/login', pathMatch: 'full'}
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