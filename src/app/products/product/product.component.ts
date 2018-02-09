import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ProductCategory } from '../model/product-category.enum';
import { IProduct } from '../model/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private _product: IProduct;
  @Input() get product(): IProduct {
    return this._product;
  }
  set product(product: IProduct) {
    this._product = product;

    this.productQnt.nativeElement.value = 1;
  }

  @Output() add = new EventEmitter();

  @ViewChild('productQnt')
  productQnt: ElementRef;

  ngOnInit() {
  }

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

    this.add.emit({ quantity: this.productQnt.nativeElement.value, product: this.product });
  }
}
