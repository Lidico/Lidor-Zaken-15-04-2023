import React from 'react';
import {StyledPageContainer} from "../GamePage/GamePage.styled";
import {StyledBoardBase, StyledHeaders} from "./LeaderBoard.styled";
import {LeaderBoardViewerProps} from "./LeaderBoard.models";
import {BoardLine} from "../../components/BoardLine";
import {
    StyledNameContainer,
    StyledScoreContainer,
    StyledTimeContainer,
    StyledTurnsContainer
} from "../../components/BoardLine/BoardLine.styled";
import {useTranslation} from "react-i18next";
import {StyledTimerText} from "../../components/GameBar/GameBar.styled";

const LeaderBoardViewer:React.FC<LeaderBoardViewerProps> = ({board}) => {
    const { t } = useTranslation();
    return (
        <StyledPageContainer>
            <StyledBoardBase>
                <StyledTimerText>{t('text.leaderBoard')}</StyledTimerText>
                <StyledHeaders>
                    <StyledNameContainer>{t('text.name')}</StyledNameContainer>
                    <StyledTurnsContainer>{t('text.turnLost')}</StyledTurnsContainer>
                    <StyledTimeContainer>{t('text.time')}</StyledTimeContainer>
                    <StyledScoreContainer>{t('text.score')}</StyledScoreContainer>
                </StyledHeaders>
                {board && board.map(line=>{
                    return <BoardLine line={line}/>
                })}
            </StyledBoardBase>
        </StyledPageContainer>
    );
};

export default LeaderBoardViewer;