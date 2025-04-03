import {useContext, useEffect} from "react";
import {catalogData} from "../data/catalogData.ts";
import {CatalogCard} from "./CatalogCard.tsx";
import {ProductItem} from "../types/productItem.ts";

export const CatalogList = () => {
    // const shoppingCart = useContext(ProductItem[])


    const onAddToCart = (product: ProductItem) => {

    }

    return(
        <div>
            {catalogData.map(product=>
                <CatalogCard product={product} onAddToCart={onAddToCart}/>
            )}
        </div>
    )
}