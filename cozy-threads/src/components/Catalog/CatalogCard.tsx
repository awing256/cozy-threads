import {ProductItem} from "../../types/productItem.ts";
import {Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useCart} from "../ShoppingCart/useCart.tsx";
import {StyledCard} from "../../styles/StyledCard.ts";

interface CatalogCardProps{
    product: ProductItem;
}

export const CatalogCard= ({product}: CatalogCardProps) => {
    const {addToCart} = useCart();
    return(
        <div>
            <StyledCard sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
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
                <CardActions>
                    <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
                </CardActions>
            </StyledCard>
        </div>
    )
}