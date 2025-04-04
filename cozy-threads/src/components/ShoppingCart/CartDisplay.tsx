import {useCart} from "./useCart.tsx";
import {CartCard} from "./CartCard.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {Button, Typography} from '@mui/material';
import SiteHeader from "../SiteHeader.tsx";
import Toolbar from "@mui/material/Toolbar";
import {Link} from "react-router-dom";

export const CartDisplay = () => {
    const {clearCart, cartItems, getTotalCost} = useCart();

    return(
        <>
            <SiteHeader />
            {cartItems.map(cartItem=>
                <CartCard cartItem={cartItem} key={cartItem.product.id}/>
            )}
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    Total Cost of Cart: ${getTotalCost()}
                </Typography>
                <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={clearCart}
                >
                    Clear All Items From Cart
                </Button>
                <Button
                    variant="outlined"
                    color="success"
                    startIcon={<ShoppingCartCheckoutIcon  />}
                    to='/checkout'
                    component={Link}
                >
                    Checkout
                </Button>

            </Toolbar>
        </>
    )


}