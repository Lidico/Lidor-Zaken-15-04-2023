import React from 'react';
import GameContainerViewer from "./GameContainer.viewer";
import {GameContainerProps} from "./GameContainer.models";

const GameContainerController:React.FC<GameContainerProps> = ({children}) => {
    return (
        <GameContainerViewer children={children}/>
    );
};

export default GameContainerController;