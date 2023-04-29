import React from 'react';
import DarkLogo from "../../styles/assets/images/logoDark.svg";

interface LogoProps {
    height: number
}
const Logo:React.FC<LogoProps> = ({height}) => {
    return  <img alt={'MemoryG'} src={DarkLogo} height={height}/>;
};

export default Logo;