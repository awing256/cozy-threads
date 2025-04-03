import {catalogData} from "../../data/catalogData.ts";
import {CatalogCard} from "./CatalogCard.tsx";

export const CatalogList = () => {
    return(
        <div>
            {catalogData.map(product=>
                <CatalogCard product={product}/>
            )}
        </div>
    )
}