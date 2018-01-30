import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ProductCategory } from '../product-category.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() select: EventEmitter<Product> = new EventEmitter();
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    console.log('product selected');
    this.select.emit(product);
  }

  private getProducts(): void {
    this.products = this.productService.getProducts();
  }
}
