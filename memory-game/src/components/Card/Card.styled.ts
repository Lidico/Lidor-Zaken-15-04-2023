import {Box, styled} from "@mui/material";
import {StyledCardProps} from './Card.models'
import {Breakpoints} from "../../types/Styles";

export const StyledCard = styled(Box)<StyledCardProps>(({theme, canClick, flip}) => ({
    width:'150px',
    height:'200px',
    cursor: canClick?'pointer':'not-allowed',
    borderRadius:'25px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    background: `var(--color-background-secondary-${theme.palette.mode})`,
    boxShadow: `inset 0px -6px 0px var(--color-background-shadow-${theme.palette.mode})`,
    outline: '2px solid var(--color-shadow-first)',
    backfaceVisibility: 'hidden',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    transform: flip?'rotateY(180deg)':'none',
    outlineOffset:'-15px',

    [theme.breakpoints.down(Breakpoints.xl)]: {
        width:'120px',
        height:'170px',
    },

}));

export const StyledCardFlipped = styled(Box)<StyledCardProps>(({theme, canClick, flip}) => ({
    width:'150px',
    height:'200px',
    cursor: canClick?'pointer':'not-allowed',
    borderRadius:'25px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    background: `var(--color-neutral-${theme.palette.mode})`,
    backfaceVisibility: 'hidden',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    transform: flip?'rotateY(180deg)':'none',
    boxShadow: `inset 0px -6px 0px var(--color-background-shadow-${theme.palette.mode})`,

    [theme.breakpoints.down(Breakpoints.xl)]: {
        width:'120px',
        height:'170px',
    },

    [theme.breakpoints.down(Breakpoints.tablet)]: {
        right: '148px',
        bottom: '241px',
    },

    [theme.breakpoints.down(Breakpoints.mobile)]: {
        right: '25px',
        bottom: '49px',
    },
}));