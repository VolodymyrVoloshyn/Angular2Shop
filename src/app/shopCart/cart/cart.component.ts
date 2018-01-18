import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Array<CartItem>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getProducts();
  }

}
