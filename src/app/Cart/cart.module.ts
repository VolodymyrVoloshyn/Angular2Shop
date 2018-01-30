import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartItemListComponent],
  providers: [CartService],
  exports: [CartItemListComponent]
})
export class CartModule { }
