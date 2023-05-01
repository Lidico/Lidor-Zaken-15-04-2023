import {Box, styled, Typography} from "@mui/material";
import {Breakpoints} from "../../types/Styles";
export const StyledPageContainer = styled(Box)(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 'var(--size-xl)'
}));

export const StyledGameContainer = styled(Box)(({theme}) => ({
    width: '70%',
    height: 'auto',
    display: 'grid',
    gap: 'var(--size-m)',
    marginTop: 'var(--size-xxxl)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: 'repeat(5, 1fr)',

    [theme.breakpoints.down(Breakpoints.tablet)]: {
        gridTemplateRows: 'repeat(5, 1fr)',
        gridTemplateColumns: 'repeat(2, 1fr)',
        width: '40%',
    },

    [theme.breakpoints.down(Breakpoints.mobile)]: {
        width: '80%',

    },

}));

export const StyledScoreAndRetry = styled(Box)(() => ({
    width: '70%',
    height: 'auto',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    gap: 'var(--size-m)',
    marginTop: 'var(--size-xl)',
}));


export const StyledScoreText = styled(Typography)(({theme}) => ({
    fontFamily: 'clockFont',
    fontSize: 'var(--font-xxlarge-size)',
    fontHeight: 'var(--font-xxlarge-line-height)',
    color: `var(--color-score-${theme.palette.mode})`,
}));











