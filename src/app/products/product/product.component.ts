import { Component, OnInit, Input } from '@angular/core';
import { ProductCategory } from '../product-category.enum';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  get productName(): string {
    return this.product ? this.product.name : null;
  }

  get productDescription(): string {
    return this.product ? this.product.description : null;
  }

  get productPrice(): number {
    return this.product ? this.product.price : null;
  }

  get productCategory(): ProductCategory {
    return this.product ? this.product.category : null;
  }

  get isAvailable(): boolean {
    return this.product ? this.product.isAvailable : null;
  }

  get ingredients(): string[] {
    return this.product ? this.product.ingredients : null;
  }

  /*
id: number;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable: boolean;
    ingredients: string[];
  */

  constructor() { }

  ngOnInit() {
    // this.productName = 'Humburger';
    // this.productDescription = 'Big Burger';
    // this.productPrice = 1.5;
    // this.productCategory = ProductCategory.Burger;
    // this.isAvailable = true;
    // this.ingredients = ['Hum', 'Bread', 'Ketchup'];
  }

}
