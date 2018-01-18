import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product/product.component';
import { ProductService } from './products/product.service';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './shopCart/cart/cart.component';
import { CartService } from './shopCart/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
