import {Card, styled} from "@mui/material";

export const StyledCard = styled(Card)({
    maxWidth: 345,
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)'
    },
    backgroundColor: '#121212',
    color: "white"
});