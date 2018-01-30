import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from './product';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html'
})

export class ProductsMainComponent implements OnInit {
  @ViewChild('productDetail')
  productDetail: ProductComponent;

  constructor() { }

  ngOnInit() {
  }

  onSelect(product: Product): void {
    console.log('product selected');
    this.productDetail.product = product;
  }
}
