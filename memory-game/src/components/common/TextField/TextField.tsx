import React from 'react';
import {StyledTextField} from "./TextField.styled";

interface TextFieldProps {
    label: string,
    width?:string
}
const TextField:React.FC<TextFieldProps> = ({label, width = '100%'}) => {
    return <StyledTextField width={width} label={label} />;
};

export default TextField;