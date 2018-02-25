import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItemCount: number = 0;

  createdDate = new Observable<Date>(
    (observer: Subscriber<Date>) => {
      observer.next(this.cartService.getCreatedDate());

      setInterval(() => observer.next(this.cartService.getCreatedDate()), 5000);
    }
  );

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItemCount().subscribe(c=> this.cartItemCount= c);
    //this.cartItemCount=  this.cartService.getCartItemCount().pipe();
    //   map((c:number)=> {
    //   debugger;
    //   this.cartItemCount= c;
    // }
    //  )
    // );
  }

  getTotal(): number {
    return  this.cartService.getTotal();
}

art(): void {
    this.cartService.clearCart();
  }
}
