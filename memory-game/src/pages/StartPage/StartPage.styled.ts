import {Box, styled} from "@mui/material";
import {Breakpoints} from "../../types/Styles";
export const StyledPageContainer = styled(Box)(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: 'var(--size-s)',
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',
    paddingTop: 'var(--size-xl)',
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
    alignItems:'center',

    [theme.breakpoints.down(Breakpoints.l)]: {
        width: '70%',
    },

    [theme.breakpoints.down(Breakpoints.tablet)]: {
        width: '80%',
    },

    [theme.breakpoints.down(Breakpoints.mobile)]: {
        width: '90%',
    },

}));



