import React, { useState } from 'react';
import {StyledButtonsRow, StyledDialog, StyledModalText} from "./Modal.styled";
import {ModalProps} from "@components/common/Modal/Modal.models";
import {Button} from "../../common";
import {useTranslation} from "react-i18next";

const Modal:React.FC<ModalProps> = ({text, open, onSave, onRetry}) => {
    const { t } = useTranslation();
    const [isSaveDisable, setIsSaveDisable] = useState(false);
    return (
        <StyledDialog open={open}
                     closeAfterTransition
        >
            <StyledModalText>{text}</StyledModalText>
            <StyledButtonsRow>
                {onSave &&
                    <Button disabled={isSaveDisable} width={'200px'} onClick={()=>{
                        onSave();
                        setIsSaveDisable(true)
                    }} type={'yellow'}>{t('text.saveScore')}</Button>
                }
                {onRetry &&
                    <Button width={'200px'} onClick={onRetry} type={'green'}>{t('text.tryAgain')}</Button>
                }
            </StyledButtonsRow>
        </StyledDialog>

    );
};

export default Modal;