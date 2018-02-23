import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IProduct } from '../model/iproduct';
import { ProductCategory } from '../model/product-category.enum';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
//  selectedProduct: IProduct;

  products$: Observable<IProduct[]>;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  // onSelect(product: IProduct): void {
  //   this.selectedProduct = product;

  //   var link= ['product', product.id];
  //   this.router.navigate(link, {relativeTo: this.route});
  //   //this.router.navigate([{outlets: {productDetail: ['product', product.id]}}]);
  // }
}
