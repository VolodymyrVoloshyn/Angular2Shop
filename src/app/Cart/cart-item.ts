import { IProduct } from '../products/iproduct';

export class CartItem {
    product: IProduct;
    quantity: number;

    constructor(product: IProduct, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
}
