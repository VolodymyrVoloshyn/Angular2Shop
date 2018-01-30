import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent],
  providers: [ProductService],
  exports: [ProductComponent,
    ProductListComponent]
})
export class ProductsModule { }
