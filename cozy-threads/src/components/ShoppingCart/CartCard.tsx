import {ProductItem} from "../../types/productItem.ts";
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {useCart} from "./useCart.tsx";
import {StyledCard} from "../../styles/StyledCard.ts";

interface CartCardProps{
    product: ProductItem;
}

export const CartCard = ({product}: CartCardProps) =>{
    const {deleteFromCart} = useCart();

    return(
        <div>
            <StyledCard sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {product.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: 'text.secondary' }}
                        >
                            {product.price}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="delete" onClick={() => deleteFromCart(product.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={`/images/${product.image}`}
                />
            </StyledCard>
        </div>
    )
}