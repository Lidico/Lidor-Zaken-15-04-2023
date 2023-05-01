import React from 'react';
import {GameBarViewerProps} from "./GameBar.models";
import {StyledGameBar, StyledTimer, StyledTimerText} from "./GameBar.styled";
import {Switch, FlexBox} from "../common";
import {Turns} from "../Turns";
import {Logo} from "../Logo";
import { Modal } from '../../components/common';
import {useMediaQuery} from '@mui/material';

const GameBarViewer:React.FC<GameBarViewerProps> = ({onSave, onRetry, seconds, isModalOpen, modalText}) => {
    const isUpMobile = useMediaQuery('(min-width:576px)')
    return (
        <>
            <StyledGameBar>
               <Logo height={isUpMobile?50:30}/>
                <StyledTimer>
                    <StyledTimerText>{seconds}</StyledTimerText>
                </StyledTimer>
                <FlexBox alignItems={"center"} gap={isUpMobile?"s":'xs'}>
                    <Turns/>
                    <FlexBox direction={"column"}>
                        <Switch type={'mode'}/>
                        <Switch type={'language'}/>
                    </FlexBox>
                </FlexBox>

            </StyledGameBar>
            <Modal onSave={modalText==='You won!'|| modalText==='Has ganado!'?onSave:undefined} onRetry={modalText!=='Start' && modalText!=='Empezar' ?onRetry:undefined} text={modalText} open={isModalOpen}/>
        </>
    );
};

export default GameBarViewer;