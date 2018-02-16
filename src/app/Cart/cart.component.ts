import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  createdDate = new Observable<Date>(
    (observer: Subscriber<Date>) => {
      observer.next(this.cartService.getCreatedDate());

      setInterval(() => observer.next(this.cartService.getCreatedDate()), 5000);
    }
  );

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  getCartItemsCount(): number {
    return this.cartService.getProductsCount();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
