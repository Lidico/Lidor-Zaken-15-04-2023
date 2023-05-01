import {Box, styled, Typography} from "@mui/material";
export const StyledGameBar = styled(Box)(({theme}) => ({
    height: '100px',
    padding: '0 15px',
    justifyContent:'space-between',
    background: `var(--color-background-secondary-${theme.palette.mode})`,
    display:'flex',
    alignItems: 'center',
    width: 'cover',
    borderRadius: "0 0 25px 0",
    boxShadow: `inset 0px -6px 0px var(--color-background-shadow-${theme.palette.mode})`
}));

export const StyledTimer = styled(Box)(({theme}) => ({
    height: '150px',
    padding: '0 15px',
    justifyContent:'center',
    background: `var(--color-background-secondary-${theme.palette.mode})`,
    display:'flex',
    alignItems: 'center',
    width: '150px',
    borderRadius: "100%",
    boxShadow: `inset 0px -6px 0px var(--color-background-shadow-${theme.palette.mode})`
}));

export const StyledTimerText = styled(Typography)(() => ({
    fontFamily: 'clockFont',
    fontSize: 'var(--font-xxlarge-size)',
    fontHeight: 'var(--font-xxlarge-line-height)',
    color: `var(--color-card-first)`,
    marginTop: '20px'
}));