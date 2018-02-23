import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsMainComponent } from './products-main.component';
import { MarkVisitedDirective } from './mark-visited.directive';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductResolveGuard } from './guards/product-resolve.guard';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductsMainComponent,
    MarkVisitedDirective],
  providers: [ProductService, ProductResolveGuard],
  exports: [ProductsMainComponent]
})
export class ProductsModule { }
