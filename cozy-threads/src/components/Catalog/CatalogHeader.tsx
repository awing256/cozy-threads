import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CatalogHeader() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                        }}
                    >
                        Cozy Threads
                    </Typography>
                    <Toolbar>
                        <IconButton component={Link} aria-label="shopping cart" to="/cart">
                            <ShoppingCartIcon  />
                        </IconButton>

                    </Toolbar>
                </Toolbar>
            </AppBar>
        </Box>
    );
}