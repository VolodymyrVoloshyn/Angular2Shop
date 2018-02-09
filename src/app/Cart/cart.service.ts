import { Injectable } from '@angular/core';
import { IProduct } from '../products/model/iproduct';
import { CartItem } from './cart-item';

@Injectable()
export class CartService {
  cartItems: Array<CartItem>;

  constructor() {
    this.cartItems = new Array<CartItem>();
  }

  addProduct(product: IProduct, quantity: number): void {
    this.cartItems.push(new CartItem(product, quantity));
  }

  removeProduct(cartItem: CartItem): void {
    let index = this.cartItems.indexOf(cartItem);

    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getProducts(): Array<CartItem> {
    return this.cartItems;
  }

  getProductsCount(): number {
    return this.cartItems.length;
  }

  getTotal(): number {
    let total = 0;
    for (let item of this.cartItems) {

      total += item.quantity * item.product.price;
    }

    return total;
  }
}
