import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, HostBinding, AfterViewInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, AfterViewInit {
  @Input() cartItem: CartItem;
  // @ViewChild('inputCartItemQnt')
  // inputCartItemQnt: ElementRef;
  ishovering: boolean;
  isSelected = false;

  @HostListener('click', []) edit() {
    if (!this.isSelected) {
      this.isSelected = true;

      // this.element.nativeElement.querySelector('input').focus(); - don't work

      // setTimeout(function () {
      //   this.inputCartItemQnt.nativeElement.focus();
      // }.bind(this), 1);
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.ishovering = false;
  }

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.inputCartItemQnt);

  }

  deleteCartItem(): void {
    this.cartService.removeProduct(this.cartItem);
  }

    editFinished(): void {
      this.isSelected = false;
    }
  }
