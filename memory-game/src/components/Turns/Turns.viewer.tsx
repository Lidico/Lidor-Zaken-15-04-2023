import React from 'react';
import {TurnsViewerProps} from "./Turns.models";
import {StyledTurnsContainer} from "./Turns.styled";
import {AiFillHeart} from 'react-icons/ai'
import {useTypedSelector} from "../../hooks";
import {RootState} from "../../redux";
const TurnsViewer:React.FC<TurnsViewerProps> = ({turns}) => {
    const { mode } = useTypedSelector((state: RootState) => state.config);
    return <StyledTurnsContainer>
        {turns.map((turn)=>{
            return <AiFillHeart size={32} fill={turn.isActive?`var(--color-neutral-heart-${mode})`:`var(--color-background-primary-${mode})`}/>
        })}
    </StyledTurnsContainer>;
};

export default TurnsViewer;