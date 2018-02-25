import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { TimeDiffNowPipe } from './pipes/time-diff-now.pipe';
import { Enum2ArrayPipe } from './pipes/enum2-array.pipe';
import { CartItemOrderPipe } from './pipes/cart-item-order.pipe';
import { CartShortViewComponent } from './cart-short-view/cart-short-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CartItemListComponent, CartComponent,
    CartItemComponent,
    TimeDiffNowPipe,
    Enum2ArrayPipe,
    CartItemOrderPipe,
    CartShortViewComponent],
  providers: [CartService],
  exports: [CartComponent,
    CartShortViewComponent]
})
export class CartModule { }
