import { createContext } from 'react';
import {ProductItem} from "../../types/productItem.ts";

export interface CartItem{
    product: ProductItem,
    count: number
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: ProductItem) => void
    deleteFromCart: (productID: number) => void;
    getTotalCost: () => number;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
