import {catalogData} from "../../data/catalogData.ts";
import {CatalogCard} from "./CatalogCard.tsx";

import CatalogHeader from "./CatalogHeader.tsx";
import {Grid} from "@mui/material";

export const CatalogList = () => {
    return(
        <>
            <CatalogHeader />
            <Grid container spacing={2}>
                {catalogData.map(product=>
                    <Grid size={4}>
                        <CatalogCard product={product}/>
                    </Grid>
                )}
            </Grid>

        </>
    )
}