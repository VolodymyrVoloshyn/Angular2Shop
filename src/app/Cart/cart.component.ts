import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  getCartItemsCount(): number {
    return this.cartService.getProductsCount();
  }

  getTotal(): number {
    let total = 0;
    for (let item of this.cartService.getProducts()) {

      total += item.quantity * item.product.price;
    }

    return total; 
    
  }
}
