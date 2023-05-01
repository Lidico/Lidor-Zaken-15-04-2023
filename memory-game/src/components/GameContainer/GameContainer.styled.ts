import {Box, styled} from "@mui/material";
export const StyledGameContainer = styled(Box)(({theme}) => ({
    background: `var(--color-background-primary-${theme.palette.mode})`,
    display:'flex',
    flexDirection: 'column',
    width: 'cover',
    minHeight: '100vh',
    height: '100%'
}));