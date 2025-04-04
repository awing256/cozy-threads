import {Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useCart} from "./useCart.tsx";
import {StyledCartCard} from "../../styles/StyledCartCard.ts";
import {CartItem} from "./CartContext.ts";

interface CartCardProps{
    cartItem: CartItem;
}

export const CartCard = ({cartItem}: CartCardProps) =>{
    const {deleteFromCart} = useCart();

    return(
        <StyledCartCard>
            <CardMedia
                sx={{ height: 250 }}
                image={"/images/" + cartItem.product.image}
                title={cartItem.product.title}
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    {cartItem.product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey' }}>
                    {cartItem.product.description}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: "auto"
            }}>
                <Button size="small" onClick={() => deleteFromCart(cartItem.product.id)}>Delete from Cart</Button>
                <div>
                    <Typography variant="h5" sx={{ color: 'grey' }}>
                        Amount: {cartItem.count}
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'grey' }}>
                        {cartItem.count > 1 ? `Total: $${(cartItem.count * cartItem.product.price).toFixed(2)}`: `$${cartItem.product.price}`}
                    </Typography>
                </div>

            </CardActions>
        </StyledCartCard>
    )
}