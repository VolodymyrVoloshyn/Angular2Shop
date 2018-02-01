import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../iproduct';
import { ProductCategory } from '../product-category.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedProduct: IProduct;

  @Output() select: EventEmitter<IProduct> = new EventEmitter();
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: IProduct): void {
    this.selectedProduct = product;

    this.select.emit(product);
  }

  private getProducts(): void {
    this.products = this.productService.getProducts();
  }
}
