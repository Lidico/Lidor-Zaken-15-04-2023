import React from 'react';
import {LanguageSwitch, ModeSwitch} from './Switch.styled';
import {SwitchViewerProps} from "./Switch.models";

const SwitchViewer:React.FC<SwitchViewerProps> = ({type, onChange, value}) => {
    switch (type) {
        case 'mode':
            return <ModeSwitch  value={value} onChange={onChange}/>
        case 'language':
            return  <LanguageSwitch value={value} onChange={onChange} />
        default:
            return <></>;
    }
};

export default SwitchViewer;