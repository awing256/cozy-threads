import {useContext} from "react";
import {CartContext} from "./CartContext.ts";

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('Custom hook useCart must be used with a provider');
    }
    return context;
};