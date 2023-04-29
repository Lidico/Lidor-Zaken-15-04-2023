import React, {useEffect} from 'react';
import GamePageViewer from "./GamePage.viewer";
import {useRouter, useTypedSelector} from "../../hooks";
import {useDispatch} from "react-redux";
import { startNewGame } from '../../components/GameContainer/GameContainer.slice';
import {Shape} from "../../components/GameContainer/GameContainer.models";
import {RootState} from "../../redux";

const GamePageController:React.FC = () => {
    const { game } = useTypedSelector((state: RootState) => state.gameContainer);
    const dispatch = useDispatch()
    const { query } = useRouter();
    const { id } = query;

    useEffect(()=>{
        if(id){
            const shapes: Shape[] = ['X', 'O', 'V', 'U', 'Z'];
            const shapesArray: string[] = [...shapes, ...shapes];
            dispatch(startNewGame({id,shapes:shapesArray}))
        }
        else {
            //redirect
        }
    },[id, dispatch])

    useEffect(()=>{
        if(game){
            game.cards.shuffleList()
        }
    },[game])
    return <GamePageViewer/>;
};

export default GamePageController;