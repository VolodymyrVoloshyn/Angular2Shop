import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ProductCategory } from '../model/product-category.enum';
import { IProduct } from '../model/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() add = new EventEmitter();
  private _product: IProduct;

  @ViewChild('productQnt')
  productQnt: ElementRef;

  @Input() set product(product: IProduct) {
    this._product = product;

    this.productQnt.nativeElement.value = 1; // reset to default
  }
  get product(): IProduct{
    return this._product;
  }

  get productName(): string {
    return this._product ? this._product.name : null;
  }

  get productDescription(): string {
    return this._product ? this._product.description : null;
  }

  get productPrice(): number {
    return this._product ? this._product.price : null;
  }

  get productCategory(): ProductCategory {
    return this._product ? this._product.category : null;
  }

  get isAvailable(): boolean {
    return this._product ? this._product.isAvailable : null;
  }

  get ingredients(): string[] {
    return this._product ? this._product.ingredients : null;
  }

  constructor() { }

  ngOnInit() {
  }

  onAdd(): void {
    if (!this._product) {
      // error?
      console.log('Product is not selected');
    }

    if (this.productQnt.nativeElement.value < 1) {
      // error?
      console.log('Quantity is incorrect.');
      return;
    }

    this.add.emit({ quantity: this.productQnt.nativeElement.value, product: this._product });
  }
}
