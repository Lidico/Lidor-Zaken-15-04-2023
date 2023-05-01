import {Box, Dialog, styled, Typography} from "@mui/material";
import {Breakpoints} from "../../../types/Styles";

export const StyledDialog = styled(Dialog)(({theme}) => ({

    "& .MuiDialog-container": {
        background: "transparent"
    },

    "& .MuiDialog-paper": {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: "100vw !important",
        width: "100vw !important",
        height: "350px",
        background: `var(--color-neutral-${theme.palette.mode})`,
        borderRadius: "4px",
        padding: "6px 16px",
        boxShadow: 'none'
    }
}));

export const StyledModalText = styled(Typography)(() => ({
    fontFamily: 'clockFont',
    fontSize: 'var(--font-xxlarge-size)',
    fontHeight: 'var(--font-xxlarge-line-height)',
    color: `var(--color-card-first)`,
}));

export const StyledButtonsRow = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: 'var(--size-l)',

    [theme.breakpoints.down(Breakpoints.tablet)]: {
        flexDirection:'column'
    },
}));

