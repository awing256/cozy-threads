import {ProductItem} from "../../types/productItem.ts";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useCart} from "../ShoppingCart/useCart.tsx";

interface CatalogCardProps{
    product: ProductItem;
}

export const CatalogCard= ({product}: CatalogCardProps) => {
    const {addToCart} = useCart();
    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={"/images/" + product.image}
                    title={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
                </CardActions>
            </Card>
        </div>
    )
}