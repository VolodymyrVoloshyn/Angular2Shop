import { Component, OnInit } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Burger Shop';
  quantity: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  getCartItemsCount(): number {
    return this.cartService.getProductsCount();
  }
}
