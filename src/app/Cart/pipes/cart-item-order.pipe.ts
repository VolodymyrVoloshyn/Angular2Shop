import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { SortOrder } from '../model/sort-order.enum';

@Pipe({
  name: 'cartItemOrder'
})
export class CartItemOrderPipe implements PipeTransform {
  transform(value: CartItem[], orderBy: SortOrder, asc: Boolean): CartItem[] {

    switch (SortOrder[orderBy]) {
      case SortOrder.Name:
        value.sort((x, y) => {
          if (x.product.name < y.product.name) {
            return asc ? -1 : 1;
          } else if (x.product.name > y.product.name) {
            return asc ? 1 : -1;
          } else {
            return 0;
          }
        });
        break;
      case SortOrder.Price:
        value.sort((x, y) => {
          if (x.product.price < y.product.price) {
            return asc ? -1 : 1;
          } else if (x.product.price > y.product.price) {
            return asc ? 1 : -1;
          } else {
            return 0;
          }
        });
        break;
      case SortOrder.Quantity:
        value.sort((x, y) => {
          if (x.quantity < y.quantity) {
            return asc ? -1 : 1;
          } else if (x.quantity > y.quantity) {
            return asc ? 1 : -1;
          } else {
            return 0;
          }
        });
        break;

      default:
        break;
    }

    return value;
  }
}
