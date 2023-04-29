import {styled, TextField} from "@mui/material";

interface StyledTextFieldProps {
    width:string
}
export const StyledTextField = styled(TextField)<StyledTextFieldProps>(({theme, width}) => ({
    width: width ?? "100%",


    "& .MuiInputBase-input": {
        fontSize: "var(--font-large-size)",
        background: `var(--color-neutral-${theme.palette.mode})`,
        fontFamily: "clockFont",
        border: `1px solid var(--color-background-shadow-${theme.palette.mode})`,
        borderRadius: "12px",
        padding: "var(--size-xs) var(--size-m)",
        height: "var(--size-xl)",
        color: `var(--color-background-shadow-${theme.palette.mode})`,
        boxShadow: `inset 0px -6px 0px var(--color-background-shadow-${theme.palette.mode})`

    },

    "& .MuiOutlinedInput-root": {
        padding: 0
    },

    "& .MuiFormHelperText-root": {
        fontSize: "var(--font-large-size)",
        fontFamily: "clockFont",
        lineHeight: "140%",
        marginInlineStart: "0",
        marginInlineEnd: "0",
        padding: 0,
        "& .Mui-error": {
            padding: 0
        }
    },

    "& .MuiInputLabel-root": {
        justifyContent: "center",
        fontSize: "var(--font-large-size)",
        fontFamily: "clockFont",
        marginTop:'-5px',
        color: `var(--color-background-shadow-${theme.palette.mode})`,
    },

    "& .MuiInputAdornment-positionEnd": {
        position: "relative",
        right: "30px",

        "& .MuiIconButton-root": {
            right: "-20px"
        }
    },

    "& .MuiInputAdornment-positionStart": {
        position: "relative",
        left: "10px"
    },

    "& .MuiInputLabel-shrink": {
        display: "none"
    },

    "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
    },

    "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
        }
    }
}));