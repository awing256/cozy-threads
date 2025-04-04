import {catalogData} from "../../data/catalogData.ts";
import {CatalogCard} from "./CatalogCard.tsx";

import SiteHeader from "../SiteHeader.tsx";
import {Grid} from "@mui/material";

export const CatalogList = () => {
    return(
        <>
            <SiteHeader />
            <Grid container spacing={2}>
                {catalogData.map(product=>
                    <Grid size={4} key={product.id}>
                        <CatalogCard product={product}/>
                    </Grid>
                )}
            </Grid>

        </>
    )
}