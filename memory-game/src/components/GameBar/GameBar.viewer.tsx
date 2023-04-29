import React from 'react';
import {GameBarViewerProps} from "./GameBar.models";
import {StyledGameBar, StyledTimer, StyledTimerText} from "./GameBar.styled";
import {Switch, FlexBox} from "../common";
import {Turns} from "../Turns";
import {Logo} from "../Logo";

const GameBarViewer:React.FC<GameBarViewerProps> = ({seconds}) => {
    return (
        <StyledGameBar>
           <Logo height={50}/>
            <StyledTimer>
                <StyledTimerText>{seconds}</StyledTimerText>
            </StyledTimer>
            <FlexBox alignItems={"center"} gap={"s"}>
                <Turns/>
                <FlexBox direction={"column"}>
                    <Switch type={'mode'}/>
                    <Switch type={'language'}/>
                </FlexBox>
            </FlexBox>

        </StyledGameBar>
    );
};

export default GameBarViewer;