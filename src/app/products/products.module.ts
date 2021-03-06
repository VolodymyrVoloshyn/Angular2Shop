import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsMainComponent } from './products-main.component';
import { MarkVisitedDirective } from './mark-visited.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductsMainComponent,
    MarkVisitedDirective],
  providers: [ProductService],
  exports: [ProductsMainComponent]
})
export class ProductsModule { }
