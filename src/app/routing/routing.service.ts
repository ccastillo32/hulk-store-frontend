import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RoutingService {

  constructor(
    private router: Router
  ) {}

  goToCreateProduct(): void {
    this.navigateByURL('/create-product')
  }

  goToProductList(): void {
    this.navigateByURL('/products')
  }

  navigateByURL(url: string) {
    this.router.navigateByUrl(url);
  }

}