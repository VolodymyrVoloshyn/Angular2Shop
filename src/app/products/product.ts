import {ProductCategory} from './product-category.enum';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable: boolean;
    ingredients: string[];
}
