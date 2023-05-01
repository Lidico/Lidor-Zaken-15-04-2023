import React from 'react';
import {TurnsViewerProps} from "./Turns.models";
import {StyledTurnsContainer} from "./Turns.styled";
import {AiFillHeart} from 'react-icons/ai'
import {useTypedSelector} from "../../hooks";
import {RootState} from "../../redux";
import {useMediaQuery} from '@mui/material';

const TurnsViewer:React.FC<TurnsViewerProps> = ({turns}) => {
    const isUpMobile = useMediaQuery('(min-width:576px)')

    const { mode } = useTypedSelector((state: RootState) => state.config);
    return <StyledTurnsContainer>
        {turns.map((turn)=>{
            return <AiFillHeart size={isUpMobile?32:22} fill={turn.isActive?`var(--color-neutral-heart-${mode})`:`var(--color-background-primary-${mode})`}/>
        })}
    </StyledTurnsContainer>;
};

export default TurnsViewer;