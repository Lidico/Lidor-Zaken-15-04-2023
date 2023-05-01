import { styled, Button } from "@mui/material";

interface StyledButtonProps {
    width?: string,
    buttonType: 'yellow'|'green'|'default'
}
export const StyledButton = styled(Button)<StyledButtonProps>(({width, buttonType }) => ({
    boxSizing: "border-box",
    border: "none",
    width: width ?? "100%",
    height: "40px",
    fontFamily: "clockFont",
    fontWeight: 500,
    fontSize: "var(--font-large-size)",
    textAlign: "right",
    boxShadow: `inset 0px -6px 0px var(${buttonType==='yellow'?'--color-shadow-first':(buttonType==='green'?'--color-shadow-second':'--color-shadow-third')})`,
    color: 'var(--color-text-button)',
    background: buttonType==='yellow'?'var(--color-card-first)':(buttonType==='green'?'var(--color-card-second)':'var(--color-card-third)'),
    borderRadius: "12px",

    "&:hover": {
        background: buttonType==='yellow'?'var(--color-card-first)':(buttonType==='green'?'var(--color-card-second)':'var(--color-card-third)'),
        boxShadow: `inset 0px -6px 0px var(${buttonType==='yellow'?'':(buttonType==='green'?'':'')})`,
    },

    "&:disabled": {
        background: buttonType==='yellow'?'var(--color-disabled-first)':(buttonType==='green'?'var(--color-disabled-second)':'var(--color-disabled-third)')
    },
}));