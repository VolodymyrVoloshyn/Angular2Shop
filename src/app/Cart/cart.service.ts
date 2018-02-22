import { Injectable } from '@angular/core';
import { IProduct } from '../products/model/iproduct';
import { CartItem } from './cart-item';

@Injectable()
export class CartService {
  private cartItems: Array<CartItem>;
  private itemsCount: number;
  private cartTotal: number;

  constructor() {
    this.cartItems = new Array<CartItem>();
    this.itemsCount = 0;
    this.cartTotal = 0;
  }

  addProduct(product: IProduct, quantity: number): void {
    this.cartItems.push(new CartItem(product, quantity));
    this.calculateCartData();
  }

  removeProduct(cartItem: CartItem): void {
    let index = this.cartItems.indexOf(cartItem);

    if (index > -1) {
      this.cartItems.splice(index, 1);

      this.calculateCartData();
    }
  }

  updateProductItem(cartItem: CartItem, quantity: number) {
    let index = this.cartItems.indexOf(cartItem);

    if (index > -1) {
      cartItem.quantity = quantity;

      this.calculateCartData();
    }
  }

  clearCart(): void {
    this.cartItems.length = 0;

    this.calculateCartData();
  }

  getProducts(): Array<CartItem> {
    return this.cartItems;
  }

  getProductsCount(): number {
    return this.itemsCount;
  }

  getTotal(): number {
    return this.cartTotal;
  }

  private calculateCartData(): void {
    let total = 0;

    for (let item of this.cartItems) {
      total += item.quantity * item.product.price;
    }

    this.itemsCount = this.cartItems.length;
    this.cartTotal = total;
  }
}
