import {ProductItem} from "../../types/productItem.ts";
import {useState} from "react";
import {CartContext, CartItem} from "./CartContext.ts";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: ProductItem) => {
        setCartItems(prevItems => {
            const existingIndex = prevItems.findIndex(item => item.product.id === product.id)
            if(existingIndex >= 0){
                const updatedItems = [...prevItems];
                updatedItems[existingIndex] = {
                    ...updatedItems[existingIndex],
                    count: updatedItems[existingIndex].count + 1
                };
                return updatedItems;
            } else {
                return [...prevItems, { product, count: 1 }];
            }
        });
    };

    const deleteFromCart = (productID: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.product.id !== productID));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalCost = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.product.price * item.count;
        });
        return Number(total.toFixed(2));
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart, getTotalCost, clearCart }}>
            {children}
        </CartContext.Provider>
);
};