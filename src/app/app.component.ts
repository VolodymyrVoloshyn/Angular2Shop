import { Component, OnInit } from '@angular/core';
import { Product } from './products/product';
import { ProductCategory } from './products/product-category.enum';
import { CartService } from './shopCart/cart.service';
import { CartItem } from './shopCart/cart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Burger Shop';
  selectedProduct: Product;
  quantity: number;
  cartItemsCount: number;
  cartItems: Array<CartItem>;

  constructor(private cartService: CartService) { }

  onBuy(): void {
    console.log('Buy ' + this.selectedProduct.name + '. Quantity: ' + this.quantity);

    this.cartService.addProduct(this.selectedProduct, this.quantity ? this.quantity : 1);
  }

  ngOnInit() {
    this.selectedProduct = {
      id: 101, name: 'Humburger', description: 'Humburger description', price: 1.2, category: ProductCategory.Burger, isAvailable: true,
      ingredients: ['Hum', 'bread', 'ketchup']
    };

    this.cartItems = this.cartService.getProducts();
    this.cartItemsCount = this.cartService.getProductsCount();
  }
}
