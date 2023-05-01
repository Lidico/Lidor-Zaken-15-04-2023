import React, {useState} from 'react';
import {StyledBoxContainer, StyledPageContainer} from "./StartPage.styled";
import {Logo} from "../../components/Logo";
import { TextField, Button } from '../../components/common';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {StartPageViewerProps} from "./StartPage.models";

const StartPageViewer:React.FC<StartPageViewerProps> = ({gameID}) => {
    const { t } = useTranslation();
    const [name, setName] = useState('')

    return (
        <StyledPageContainer>
            <Logo height={40}/>
            <StyledBoxContainer>
                <TextField setText={setName} width={'60%'} label={t('text.enterYourName')}/>
                <Link style={{width:'100%', display:'flex', justifyContent:'center', textDecoration:'none'}} to={`/newGame?id=${gameID}&name=${name}`}>
                    <Button disabled={name===''} width={'60%'} type={'yellow'} >
                                {t('text.startGame')}
                    </Button>
                </Link>
                <Link style={{width:'100%', display:'flex', justifyContent:'center', textDecoration:'none'}} to={`/leaderBoard`}>
                    <Button width={'60%'} type={'green'} onClick={()=>false}>{t('text.leaderBoard')}</Button>
                </Link>
                </StyledBoxContainer>
        </StyledPageContainer>
    );
};

export default StartPageViewer;