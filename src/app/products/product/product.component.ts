import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ProductCategory } from '../model/product-category.enum';
import { IProduct } from '../model/iproduct';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  product: IProduct;

  @Output() add = new EventEmitter();

  @ViewChild('productQnt')
  productQnt: ElementRef;

  constructor(
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

    this.add.emit({ quantity: this.productQnt.nativeElement.value, product: this.product });
  }
}
