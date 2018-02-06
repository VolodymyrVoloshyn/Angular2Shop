import {ProductCategory} from './product-category.enum';
import { IProduct } from './iproduct';

export class Product implements IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable: boolean;
    ingredients?: string[];
}
