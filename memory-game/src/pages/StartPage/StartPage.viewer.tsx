import React from 'react';
import {StyledBoxContainer, StyledPageContainer} from "./StartPage.styled";
import {Logo} from "../../components/Logo";
import { TextField, Button } from '../../components/common';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {StartPageViewerProps} from "./StartPage.models";

const StartPageViewer:React.FC<StartPageViewerProps> = ({gameID}) => {
    const { t } = useTranslation();

    return (
        <StyledPageContainer>
            <Logo height={40}/>
            <StyledBoxContainer>
                <TextField width={'60%'} label={t('text.enterYourName')}/>
                <Link style={{width:'100%', display:'flex', justifyContent:'center'}} to={`/newGame?id=${gameID}`}>
                    <Button width={'60%'} type={'yellow'} onClick={()=>false}>
                                {t('text.start')}
                    </Button>
                </Link>
            <Button width={'60%'} type={'green'} onClick={()=>false}>{t('text.leaderBoard')}</Button>
            </StyledBoxContainer>
        </StyledPageContainer>
    );
};

export default StartPageViewer;