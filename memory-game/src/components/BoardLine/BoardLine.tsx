import React from 'react';
import {ToSaveScore} from "../GameBar/GameBar.models";
import {
    StyledNameContainer,
    StyledRowContainer,
    StyledScoreContainer,
    StyledTimeContainer,
    StyledTurnsContainer
} from "./BoardLine.styled";

interface BoardLineProps {
    line: ToSaveScore
}
const BoardLine:React.FC<BoardLineProps> = ({line}) => {
    const {time, playerName, turns, score} = line;
    return (
        <StyledRowContainer>
            <StyledNameContainer>{playerName}</StyledNameContainer>
            <StyledTurnsContainer>{turns}</StyledTurnsContainer>
            <StyledTimeContainer>{`${time}sec`}</StyledTimeContainer>
            <StyledScoreContainer>{`${score}`}</StyledScoreContainer>
        </StyledRowContainer>
    );
};

export default BoardLine;