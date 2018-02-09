import { Injectable } from '@angular/core';
import { IProduct } from '../model/iproduct';
import { ProductCategory } from '../model/product-category.enum';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): IProduct[] {
    const p: IProduct[] = [
      {
        id: 101, name: 'Humburger', description: 'Humburger description', price: 1.2, category: ProductCategory.Burger, isAvailable: true,
        ingredients: ['Hum', 'bread', 'ketchup']
      },
      {
        id: 102, name: 'Cheeseburger', description: 'Cheeseburger description', price: 1.4, category: ProductCategory.Burger,
        isAvailable: false, ingredients: ['Hum', 'Cheese', 'bread', 'ketchup']
      },
      {
        id: 102, name: 'Crabsburger', description: 'Crabsburger description', price: 2.1, category: ProductCategory.Burger,
        isAvailable: true, ingredients: ['Crab', 'bread', 'ketchup']
      },
      {
        id: 201, name: 'Cola', description: 'Cola 0.5', price: 0.1, category: ProductCategory.Drink,
        isAvailable: true
      },
    ];
    return p;
  }
}
