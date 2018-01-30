import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { ProductComponent } from './products/product/product.component';
// import { ProductListComponent } from './products/product-list/product-list.component';
// import { CartComponent } from './Cart/cart/cart.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
  //  CartComponent,
   // CartItemListComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
