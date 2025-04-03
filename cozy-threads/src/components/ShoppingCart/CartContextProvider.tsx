import {ProductItem} from "../../types/productItem.ts";
import {useState} from "react";
import { CartContext } from "./CartContext.ts";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<ProductItem[]>([]);

    const addToCart = (product: ProductItem) => {
        setCartItems(prevItems => [...prevItems, product]);
    };

    const deleteFromCart = (productID: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productID));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
);
};