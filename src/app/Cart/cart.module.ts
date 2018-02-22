import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CartItemListComponent, CartComponent,
    CartItemComponent],
  // providers: [CartService],
  exports: [CartComponent]
})
export class CartModule { }
