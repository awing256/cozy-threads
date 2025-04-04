import {ProductItem} from "../../types/productItem.ts";
import {Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useCart} from "../ShoppingCart/useCart.tsx";
import {StyledCatalogCard} from "../../styles/StyledCatalogCard.ts";

interface CatalogCardProps{
    product: ProductItem;
}

export const CatalogCard= ({product}: CatalogCardProps) => {
    const {addToCart} = useCart();
    return(
        <StyledCatalogCard>
            <CardMedia
                sx={{ height: 250 }}
                image={"/images/" + product.image}
                title={product.title}
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey' }}>
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: "auto"
            }}>
                <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
                <Typography variant="h5" sx={{ color: 'grey' }}>
                    ${product.price}
                </Typography>
            </CardActions>
        </StyledCatalogCard>
    )
}