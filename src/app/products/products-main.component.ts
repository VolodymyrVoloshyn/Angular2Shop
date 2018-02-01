import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductComponent } from './product/product.component';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html'
})

export class ProductsMainComponent implements OnInit {
  @ViewChild('productDetail')
  productDetail: ProductComponent;
  showProductDetatil: Boolean; // = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // this.showProductDetatil= false;
  }

  onSelect(product: IProduct): void {
    this.showProductDetatil = true;
    this.productDetail.product = product;
  }

  onProductAdd($event) {
    // console.log($event.quantity);
    this.cartService.addProduct($event.product, $event.quantity);
  }
}
