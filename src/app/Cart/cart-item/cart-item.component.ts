import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Input() isSelected = false;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
  }

  deleteCartItem(): void {
    this.cartService.removeProduct(this.cartItem);
  }
}
