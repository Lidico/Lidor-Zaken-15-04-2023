import React, {ReactNode} from 'react';
import {StyledButton} from "./Button.styled";

interface ButtonProps {
    type: 'yellow'|'green'|'default',
    onClick?: ()=>void,
    disabled?:boolean,
    children: ReactNode,
    width?: string,
}
const Button:React.FC<ButtonProps> = ({type, onClick, disabled,children, width}) => {
    return (
        <StyledButton width={width} buttonType={type} onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    );
};

export default Button;