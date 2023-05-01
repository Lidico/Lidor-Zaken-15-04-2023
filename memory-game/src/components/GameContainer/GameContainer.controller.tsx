import React, { useEffect } from 'react';
import GameContainerViewer from "./GameContainer.viewer";
import {GameContainerProps} from "./GameContainer.models";
import {useTypedSelector} from "../../hooks";
import {RootState} from "../../redux";
import {useDispatch} from "react-redux";
import {activateNewGame} from "./GameContainer.slice";

const GameContainerController:React.FC<GameContainerProps> = ({children}) => {
    const { game, turns } = useTypedSelector((state: RootState) => state.gameContainer);
    const dispatch = useDispatch()

    useEffect(()=>{
        if(game && !game.isGameActivate){
            if(turns > 0){
                dispatch(activateNewGame())
            }
        }
    },[game, dispatch, turns])

    return (
        <GameContainerViewer children={children}/>
    );
};

export default GameContainerController;