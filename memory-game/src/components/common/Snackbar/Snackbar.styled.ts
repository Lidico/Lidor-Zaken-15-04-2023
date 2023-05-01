import {Snackbar, styled} from "@mui/material";
import {StyledSnackbarProps} from "@components/common/Snackbar/Snackbar.models";

export const StyledSnackbar = styled(Snackbar)<StyledSnackbarProps>(({snackType}) => ({
    "& .MuiSnackbarContent-root": {
        boxShadow: `inset 0px -6px 0px var(${snackType === 'yellow' ? 'var(--color-card-first)' : '--color-shadow-second'})`,
        color: 'var(--color-text-button)',
        background: snackType === 'yellow' ? 'var(--color-card-first)' : 'var(--color-card-second)',
        borderRadius: "12px",
        height: "30px",
        maxWidth: '100%',
        width: '500px !important',
        display:'flex',
        justifyContent:'center',

        "& .MuiSnackbarContent-message": {
            fontFamily: "clockFont",
            marginTop:'-12px',
            fontSize: "var(--font-large-size)",
            textAlign: "center",
        },
    }
}));

