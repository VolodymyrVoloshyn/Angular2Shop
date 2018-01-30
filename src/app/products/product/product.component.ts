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

  productName: string;
  productDescription: string;
  productPrice: number;
  productCategory: ProductCategory;
  isAvailable: boolean;
  ingredients: string[];

  constructor() { }

  ngOnInit() {
    this.productName = 'Humburger';
    this.productDescription = 'Big Burger';
    this.productPrice = 1.5;
    this.productCategory = ProductCategory.Burger;
    this.isAvailable = true;
    this.ingredients = ['Hum', 'Bread', 'Ketchup'];
  }

}
