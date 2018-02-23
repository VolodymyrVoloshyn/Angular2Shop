import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { ProductService } from '../services/product.service';

import { Product } from '../model/product';
import { IProduct } from '../model/iproduct';

@Injectable()
export class ProductResolveGuard implements Resolve<IProduct> {
  constructor(
    private productService: ProductService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct | Observable<IProduct> | Promise<IProduct> {
    console.log('ProductResolveGuard is called');

    const productId = +route.paramMap.get('productId');

    if (productId) {
      return this.productService.getProduct(productId).pipe(
        catchError(() => {
          this.router.navigate(['/products']);
          return of(null);
        })
      );
    } else {
      return of(new Product());
    }
  }
}
