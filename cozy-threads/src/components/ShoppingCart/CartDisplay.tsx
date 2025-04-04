import {useCart} from "./useCart.tsx";
import {CartCard} from "./CartCard.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Typography} from '@mui/material';
import SiteHeader from "../SiteHeader.tsx";

export const CartDisplay = () => {
    const {clearCart, cartItems, getTotalCost} = useCart();

    return(
        <>
            <SiteHeader />
            {cartItems.map(cartItem=>
                <CartCard cartItem={cartItem}/>
            )}
            <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={clearCart}
            >
                Clear All Items From Cart
            </Button>
            <Typography gutterBottom variant="h5" component="div">
                Total Cost of Cart: ${getTotalCost()}
            </Typography>
        </>
    )


}