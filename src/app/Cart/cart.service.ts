import { Injectable } from '@angular/core';
import { IProduct } from '../products/model/iproduct';
import { CartItem } from './model/cart-item';

import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {
  private cartItems: Array<CartItem>;
  private itemsCount: number;
  private cartTotal: number;
  private createdCartDate?: Date;

  private _cartItems: BehaviorSubject<Array<CartItem>>;

  constructor() {
    this.cartItems = new Array<CartItem>();
    this.itemsCount = 0;
    this.cartTotal = 0;
    this.createdCartDate = null;

    this._cartItems = <BehaviorSubject<Array<CartItem>>>new BehaviorSubject([]);
  }

  addProduct(product: IProduct, quantity: number): void {
    if (this.cartItems.length === 0) {
      this.createdCartDate = new Date();
    }

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

  getProducts(): Observable<Array<CartItem>> {
    return this._cartItems.asObservable();
  }

  getProductsCount(): number {
    return this.itemsCount;
  }

  getTotal(): number {
    return this.cartTotal;
  }

  getCreatedDate(): Date {
    return new Date(this.createdCartDate);
  }

  private calculateCartData(): void {
    let total = 0;

    if (this.cartItems.length === 0) {
      this.createdCartDate = null;
    }

    for (let item of this.cartItems) {
      total += item.quantity * item.product.price;
    }

    this.itemsCount = this.cartItems.length;
    this.cartTotal = total;

    this._cartItems.next([...this.cartItems]);
  }
}
