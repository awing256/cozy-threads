import { createContext } from 'react';
import {ProductItem} from "../../types/productItem.ts";

interface CartContextType {
    cartItems: ProductItem[];
    addToCart: (product: ProductItem) => void
    deleteFromCart: (productID: number) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
