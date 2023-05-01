import {Box, styled} from "@mui/material";

export const StyledRowContainer = styled(Box)(({theme}) => ({
    padding: 'var(--size-m) var(--size-l)',
    background: `var(--color-background-primary-${theme.palette.mode})`,
    display:'flex',
    alignItems: 'center',
    width: '80%',
    borderBottom: `5px solid var(--color-background-shadow-${theme.palette.mode})`
}));

export const StyledNameContainer = styled(Box)(({theme}) => ({
    display:'flex',
    width: '40%',
    fontFamily: 'clockFont',
    fontSize: 'var(--font-large-size)',
    fontHeight: 'var(--font-large-line-height)',
    color: `var(--color-score-${theme.palette.mode})`,
}));

export const StyledTurnsContainer = styled(Box)(({theme}) => ({
    display:'flex',
    width: '20%',
    fontFamily: 'clockFont',
    fontSize: 'var(--font-large-size)',
    fontHeight: 'var(--font-large-line-height)',
    color: `var(--color-score-${theme.palette.mode})`,
}));

export const StyledTimeContainer = styled(Box)(({theme}) => ({
    display:'flex',
    width: '20%',
    fontFamily: 'clockFont',
    fontSize: 'var(--font-large-size)',
    fontHeight: 'var(--font-large-line-height)',
    color: `var(--color-score-${theme.palette.mode})`,
}));

export const StyledScoreContainer = styled(Box)(({theme}) => ({
    display:'flex',
    width: '20%',
    fontFamily: 'clockFont',
    fontSize: 'var(--font-large-size)',
    fontHeight: 'var(--font-large-line-height)',
    color: `var(--color-score-${theme.palette.mode})`,
}));