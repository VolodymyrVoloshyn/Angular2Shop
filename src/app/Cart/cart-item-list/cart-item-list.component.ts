import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {
  cartItems: Array<CartItem>;
  selectedCartItem: CartItem;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getProducts();
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

  clearCart(): void {
    this.cartService.clearCart();
    // this.cartItems = this.cartService.getProducts();
  }
}
