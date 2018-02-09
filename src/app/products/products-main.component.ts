import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IProduct } from './model/iproduct';
import { ProductComponent } from './product/product.component';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html'
})

export class ProductsMainComponent implements OnInit {
  showProductDetatil: Boolean;
  selectedProduct: IProduct;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onSelect(product: IProduct): void {
    this.showProductDetatil = true;
    this.selectedProduct = product;
  }

  onProductAdd($event) {
    this.cartService.addProduct($event.product, $event.quantity);
  }
}
