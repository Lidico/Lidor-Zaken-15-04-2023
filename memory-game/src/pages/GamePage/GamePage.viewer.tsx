import React from 'react';
import { useTranslation } from 'react-i18next';
import {StyledPageBackground} from "./GamePage.styled";

const GamePageViewer:React.FC = () => {
    const { t } = useTranslation();

    return (
        <StyledPageBackground>
            {t('text.start')}
        </StyledPageBackground>
    );
};

export default GamePageViewer;