import {catalogData} from "../../data/catalogData.ts";
import {CatalogCard} from "./CatalogCard.tsx";
import {IconButton, Toolbar} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const CatalogList = () => {
    return(
        <div>
            <Toolbar>
                <IconButton component={Link} aria-label="shopping cart" to="/cart">
                    <ShoppingCartIcon  />
                </IconButton>
            </Toolbar>
            {catalogData.map(product=>
                <CatalogCard product={product}/>
            )}
        </div>
    )
}