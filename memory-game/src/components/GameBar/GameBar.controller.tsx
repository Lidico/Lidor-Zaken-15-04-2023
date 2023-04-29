import React, {useEffect} from 'react';
import GameBarViewer from "./GameBar.viewer";
import { RootState } from "../../redux";
import { useTypedSelector, useTimer } from '../../hooks';

const GameBarController:React.FC = () => {
    const { game } = useTypedSelector((state: RootState) => state.gameContainer);
    const { seconds, start } = useTimer({
        onExpire: () => {
            console.log('done')
        }
    });
    useEffect(()=>{
        if(game) start(60)
    },[start, game])
    return (
        <GameBarViewer seconds={seconds} />
    );
};

export default GameBarController;