import { CartItem } from "./cart-items.interface";

export interface Order {
    product?: CartItem[];
    shippingDetails?: any;
    orderId?: any;
    totalAmount?: number;
    expectedDate?: any;
    paymentDate?: any;
}