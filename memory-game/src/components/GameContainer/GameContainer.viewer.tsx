import React from 'react';
import {GameContainerProps} from "./GameContainer.models";
import {StyledGameContainer} from "./GameContainer.styled";
import {GameBar} from "../GameBar";

const GameContainerViewer:React.FC<GameContainerProps> = ({children}) => {
    return (
        <StyledGameContainer>
            <GameBar/>
            {children}
        </StyledGameContainer>
    );
};

export default GameContainerViewer;