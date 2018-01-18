import { Injectable } from '@angular/core';
import { Product } from './product';
import { CartItem } from './cart-item';

@Injectable()
export class CartService {
  cartItems: Array<CartItem>;

  constructor() {
    this.cartItems = new Array<CartItem>();
  }

  addProduct(product: Product, quantity: number): void {
    this.cartItems.push(new CartItem(product, quantity));
  }

  getProducts(): Array<CartItem> {
    return this.cartItems;
  }
}
