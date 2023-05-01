import React from 'react';
import {StyledTextField} from "./TextField.styled";

interface TextFieldProps {
    label: string;
    width?:string;
    setText: (value:string)=>void;
}
const TextField:React.FC<TextFieldProps> = ({setText, label, width = '100%'}) => {
    return <StyledTextField onChange={(e)=>setText(e.target.value)} width={width} label={label} />;
};

export default TextField;