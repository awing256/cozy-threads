import {useCart} from "./useCart.tsx";
import {CartCard} from "./CartCard.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from '@mui/material';

export const CartDisplay = () => {
    const {clearCart, cartItems} = useCart();

    return(
        <div>
            {cartItems.map(product=>
                <CartCard product={product}/>
            )}
            <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={clearCart}
            >
                Clear All Items From Cart
            </Button>
        </div>
    )


}