import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { IProduct } from '../model/iproduct';
import { ProductCategory } from '../model/product-category.enum';

const productList: IProduct[] = [
  {
    id: 101, name: 'Humburger', description: 'Humburger description', price: 1.2, category: ProductCategory.Burger, isAvailable: true,
    ingredients: ['Hum', 'bread', 'ketchup'], lastUpdatedDate: new Date(2018, 1, 15)
  },
  {
    id: 102, name: 'Cheeseburger', description: 'Cheeseburger description', price: 1.4, category: ProductCategory.Burger,
    isAvailable: false, ingredients: ['Hum', 'Cheese', 'bread', 'ketchup'], lastUpdatedDate: new Date(2017, 10, 25)
  },
  {
    id: 103, name: 'Crabsburger', description: 'Crabsburger description', price: 2.1, category: ProductCategory.Burger,
    isAvailable: true, ingredients: ['Crab', 'bread', 'ketchup'], lastUpdatedDate: new Date(2018, 0, 10)
  },
  {
    id: 201, name: 'Cola', description: 'Cola 0.5', price: 0.1, category: ProductCategory.Drink,
    isAvailable: true, lastUpdatedDate: new Date(2017, 12, 1)
  },
];

const productListObservable: Observable<Array<IProduct>> = of(productList);

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    return productListObservable;
  }

  getProduct(productId : number | string): Observable<IProduct[]> {
    return productListObservable.pipe(
      map((products: IProduct[])=> products.find(p=> p.id === +productId)),
      catchError(err=> Observable.throw('Error in getProduct method'))
    );
  }
}
