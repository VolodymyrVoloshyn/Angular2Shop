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

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getProducts();
  }

}
