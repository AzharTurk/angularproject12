export interface Product {
    id?: number;
    name?: string;
    price?: number;
    salePrice?: number;
    discount?: number;
    shortDetails?: string;
    description?: string;
    stock?: number;
    isNew?: boolean;
    isSale?: boolean;
    category?: string;
    pictures?: any[];
    colors?: any[];
    size?: any[];
    tags?: any[];
    variants?: any[];
}