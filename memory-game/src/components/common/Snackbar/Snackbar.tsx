import React from 'react';
import {StyledSnackbar} from "./Snackbar.styled";
import {PositiveText, SnackBarProps, ComfortText} from "./Snackbar.models";
import {useTranslation} from "react-i18next";

const Snackbar:React.FC<SnackBarProps> = ({isPositive, open}) => {

    const { t } = useTranslation();

    const getRandomText = (isPositive:boolean): PositiveText | ComfortText => {
        const values = Object.values(isPositive?PositiveText:ComfortText);
        const randomIndex = Math.floor(Math.random() * values.length);
        return values[randomIndex];
    }
    return (
        <StyledSnackbar message={t(getRandomText(isPositive))} snackType={isPositive?'yellow':'green'} open={open} anchorOrigin={{ vertical:'bottom', horizontal:'center' }}/>
    );
};

export default Snackbar;