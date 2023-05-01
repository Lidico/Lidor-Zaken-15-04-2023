import {Box, styled} from "@mui/material";
import {Breakpoints} from "../../types/Styles";

export const StyledBoardBase = styled(Box)(({theme}) => ({
    marginTop: 'var(--size-xxl)',
    width: '70%',
    background: `var(--color-background-secondary-${theme.palette.mode})`,
    borderRadius: "25px",
    boxShadow: "inset 0px -6px 0px #101A1F",
    padding: 'var(--size-l) 0',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',

    [theme.breakpoints.down(Breakpoints.l)]: {
        width: '80%',
    },

    [theme.breakpoints.down(Breakpoints.tablet)]: {
        width: '90%',
    },

}));


export const StyledHeaders =  styled(Box)(() => ({
    display:'flex',
    width:'80%'
}));


