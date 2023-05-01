import React, {useCallback, useEffect, useState} from 'react';
import GameBarViewer from "./GameBar.viewer";
import { RootState } from "../../redux";
import {useTypedSelector, useTimer} from '../../hooks';
import {useTranslation} from "react-i18next";
import {ToSaveScore} from "./GameBar.models";
import { shapes } from '../../pages/GamePage/GamePage.models';
import { shuffle } from '../../pages/GamePage/GamePage.utils';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from "react-redux";
import {startNewGame} from "../GameContainer/GameContainer.slice";

const GameBarController:React.FC = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalText, setModalText] = useState('')
    const [toSaveScore, setToSaveScore] = useState<ToSaveScore|null>(null)
    const { game, turns, score } = useTypedSelector((state: RootState) => state.gameContainer);
    const { seconds, start } = useTimer({
        onExpire: () => {
            setModalText(t('text.gameOver') as string)
            setIsModalOpen(true)
        }
    });

    const onSave = useCallback(() => {
        const leaderBoardList = localStorage.getItem('board');
        if(leaderBoardList) {
            const toSaveOnLocal = JSON.parse(leaderBoardList);
            toSaveOnLocal.push(toSaveScore);
            localStorage.setItem('board',JSON.stringify(toSaveOnLocal));
        }
        else {
            localStorage.setItem('board',JSON.stringify([toSaveScore]));
        }

    },[toSaveScore])

    const onRetry = () => {
        const newShapesArray: string[] = [...shapes, ...shapes];
        shuffle(newShapesArray);
        const id = uuidv4();
        const name = game?.name??'';
        dispatch(startNewGame({id,shapes:newShapesArray,name}))
    }


    useEffect(()=>{
        if(game && game.isWon) {
            const finishSeconds = seconds;
            setToSaveScore({
                time: 60-finishSeconds,
                playerName: game.name,
                turns: 6-turns,
                score,
            })
            setModalText(t('text.youWon') as string)
            setIsModalOpen(true)
        }
        else if(game && game.isGameActivate) {
            setModalText(t('text.start') as string)
            setIsModalOpen(true)
            setTimeout(()=>{
                setIsModalOpen(false);
                setModalText('')
                start(game.getTime())
            },1000)
        }

    },[game])

    useEffect(()=>{
        if(turns<1){
            setModalText(t('text.gameOver') as string)
            setIsModalOpen(true)
        }
    },[turns,t])

    return (
            <GameBarViewer onSave={onSave}
                           onRetry={onRetry}
                           isModalOpen={isModalOpen}
                           modalText={modalText}
                           seconds={window.location.pathname==='/newGame'?seconds:0} />
    );
};

export default GameBarController;