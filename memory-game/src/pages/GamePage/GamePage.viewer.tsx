import React from 'react';
import {
    StyledGameContainer,
    StyledPageContainer,
    StyledScoreAndRetry,
    StyledScoreText
} from "./GamePage.styled";
import {Card} from "../../components/Card";
import {GamePageViewerProps} from "./GamePage.models";
import {Button} from "../../components/common";
import { FaRedo } from "react-icons/fa";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from '@mui/material';
import { Snackbar } from '../../components/common'


const GamePageViewer:React.FC<GamePageViewerProps> = ({cards, isSnackbarOpen, isPositive,shuffleCards , flipCard, canClick, score, startAnotherGame}) => {
    const { t } = useTranslation();

    const isUpMobile = useMediaQuery('(min-width:576px)')

    return (
        <StyledPageContainer>
            <StyledGameContainer>
                {cards && cards.getList().map((card, index)=>{
                    return <span onClick={()=>canClick && !isSnackbarOpen && flipCard(index)}><Card key={`${card.shape}${index}`} card={card}/></span>
                })}
            </StyledGameContainer>
            <StyledScoreAndRetry>
                <StyledScoreText>{`${t("text.score")}: ${score}`}</StyledScoreText>
                    <Button onClick={startAnotherGame} width={'var(--size-xl)'} type={'green'}>
                        <FaRedo size={25}/>
                    </Button>
            </StyledScoreAndRetry>
            <Button onClick={()=>shuffleCards()} width={isUpMobile?'15%':'40%'} type={'yellow'}>
                {t('text.shuffle')}
            </Button>
            <Snackbar open={isSnackbarOpen} isPositive={isPositive}/>
        </StyledPageContainer>
    );
};

export default GamePageViewer;