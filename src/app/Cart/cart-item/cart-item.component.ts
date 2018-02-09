import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
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

  deleteCartItem(): void {
    this.cartService.removeProduct(this.cartItem);
  }

    editFinished(): void {
      this.isSelected = false;
    }
  }
