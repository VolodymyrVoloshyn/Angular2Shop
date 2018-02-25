import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart-short-view',
  templateUrl: './cart-short-view.component.html',
  styleUrls: ['./cart-short-view.component.css']
})
export class CartShortViewComponent implements OnInit, OnDestroy {
  cartItemCount$: Observable<number>;

  private sub: Subscription;

  showCount: boolean = false;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartItemCount$ = this.cartService.getCartItemCount();

    this.sub = this.cartService.getCartItemCount().subscribe(c => this.showCount = c > 0);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
