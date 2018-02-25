import { Component, OnInit, Input, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../../cart/cart.service';
import { IProduct } from '../model/iproduct';
import { ProductCategory } from '../model/product-category.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  product: IProduct;

  @ViewChild('productQnt')
  productQnt: ElementRef;

  constructor(
    private cartService: CartService,    
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.data.subscribe(data => {
      this.product = { ...data.product };
    });
  }

  ngOnDestroy() { }

  get isAvailable(): boolean {
    return this.product ? this.product.isAvailable : false;
  }

  onAdd(): void {
    if (!this.product) {
      // error?
      console.log('Product is not selected');
    }

    if (this.productQnt.nativeElement.value < 1) {
      // error?
      console.log('Quantity is incorrect.');
      return;
    }

    this.cartService.addProduct(this.product, this.productQnt.nativeElement.value);
  }
}
