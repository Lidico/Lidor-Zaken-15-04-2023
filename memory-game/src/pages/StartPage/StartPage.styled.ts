import {Box, styled} from "@mui/material";
export const StyledPageContainer = styled(Box)(() => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    gap: 'var(--size-s)',
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',
}));

export const StyledBoxContainer = styled(Box)(({theme}) => ({
    width: '50%',
    background: `var(--color-background-secondary-${theme.palette.mode})`,
    borderRadius: "25px",
    gap:'var(--size-s)',
    boxShadow: "inset 0px -6px 0px #101A1F",
    padding: 'var(--size-l) 0',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
}));



