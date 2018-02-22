import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../model/cart-item';
import { SortOrder } from '../model/sort-order.enum';
import { Enum2ArrayPipe } from '../pipes/enum2-array.pipe';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {
  cartItems$: Observable<Array<CartItem>>;
  selectedCartItem: CartItem;
  orderAsc = true;
  orderBy: SortOrder;

  get sortOrders() {
    return SortOrder;
  }

  constructor(public cartService: CartService) {
    this.orderBy = SortOrder.Name;
  }

  ngOnInit() {
    this.cartItems$ = this.cartService.getProducts();
  }

  get isEmpty(): boolean {
    return this.cartService.getProductsCount() === 0;
  }

  onSelect(item: CartItem): void {
    this.selectedCartItem = item;
  }

  onCartItemUpdated($event): void {
    this.cartService.updateProductItem($event.cartItem, $event.quantity);
  }

  changeOrder(event): void {
    this.orderBy = event.target.value;
  }

  changeOrderDirection(): void {
    this.orderAsc = !this.orderAsc;
  }
}
