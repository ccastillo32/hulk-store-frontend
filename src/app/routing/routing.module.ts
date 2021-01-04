import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductComponent } from '../components/create-product/create-product.component';

const routes: Routes = [
    {path: 'create-product', component: CreateProductComponent},
    {path: '**', redirectTo: '/create-product', pathMatch: 'full'}
];

@NgModule({
    imports:        [ CommonModule, RouterModule.forRoot(routes) ],
    providers:      [],
    declarations:   [],
    exports:        [],
    bootstrap:      []
})

export class RoutingModule {
}