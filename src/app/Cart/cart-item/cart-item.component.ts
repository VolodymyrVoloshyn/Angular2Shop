import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, HostBinding, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {
  private _cartItem: CartItem;
  private _originalCartItem: CartItem;

  @Input() get cartItem(): CartItem {
    return this._cartItem;
  }
  set cartItem(cartItem: CartItem) {
    this._originalCartItem = cartItem;
    this._cartItem = { ...cartItem };
  }

  @Output() quantityUpdated = new EventEmitter();

  ishovering: boolean;
  isSelected = false;

  @HostListener('click', []) edit() {
    if (!this.isSelected) {
      this.isSelected = true;

      setTimeout(function () {
        this.element.nativeElement.querySelector('input').focus();
      }.bind(this), 1);
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.ishovering = false;
  }

  constructor(private element: ElementRef, private cartService: CartService) {

  }

  ngOnInit() {
  }

  deleteCartItem($event): void {
    this.cartService.removeProduct(this._originalCartItem);
    $event.stopPropagation();
  }

  editFinished(): void {
    this.isSelected = false;

    if (this._cartItem.quantity !== this._originalCartItem.quantity) {
      this.quantityUpdated.emit({ quantity: this._cartItem.quantity, cartItem: this._originalCartItem });
    }
  }
}
