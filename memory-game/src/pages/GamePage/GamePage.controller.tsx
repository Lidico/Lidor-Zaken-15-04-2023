import React, {useEffect, useState} from 'react';
import GamePageViewer from "./GamePage.viewer";
import {useRouter, useTypedSelector} from "../../hooks";
import {useDispatch} from "react-redux";
import {depositOneTurn, startNewGame, addToScore, gameIsWon } from '../../components/GameContainer/GameContainer.slice';
import {CardList} from "../../components/GameContainer/GameContainer.models";
import {cloneDeep} from 'loadsh';
import {RootState} from "../../redux";
import {shuffle} from "./GamePage.utils";
import { shapes } from './GamePage.models';
import { v4 as uuidv4 } from 'uuid';
import {redirect} from "react-router-dom";

const GamePageController:React.FC = () => {
    const { game, score } = useTypedSelector((state: RootState) => state.gameContainer);
    const dispatch = useDispatch()
    const { query } = useRouter();
    const { id, name } = query;
    const [cards, setCards] = useState<CardList|null>(null);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [isPositive, setIsPositive] = useState(false);

    const shuffleCards = () => {
        setCards((prev)=>{
            if(prev) {
                const clonedPrev = cloneDeep(prev);
                clonedPrev.shuffleList()
                return clonedPrev
            }
            return prev;
        })
    }

    const startAnotherGame = () => {
        const newShapesArray: string[] = [...shapes, ...shapes];
        shuffle(newShapesArray);
        const id = uuidv4();
        dispatch(startNewGame({id,shapes:newShapesArray,name}))
    }
    const flipCard = (index: number) => {
        setCards((prev)=>{
            if(prev) {
                const clonedPrev = cloneDeep(prev);
                clonedPrev.getList()[index].flip()
                return clonedPrev
            }
            return prev;
        })
    }

    useEffect(()=>{
        if(id){
            const shapesArray: string[] = [...shapes, ...shapes];
            shuffle(shapesArray);
            dispatch(startNewGame({id,shapes:shapesArray,name}))
        }
        else {
            redirect('/')
        }
    },[id, dispatch, name, redirect])

    useEffect(()=>{
        if(game){
            setCards(game.cards);
        }
    },[game])

    useEffect(()=>{
        if(cards && game && !game.isWon){
            if(cards.getList().every(card=>card.isFound)){
                dispatch(gameIsWon())
            }
            const numOfFlipped = cards.getList().filter((card)=>card.isOnFlip);
            if(numOfFlipped.length===2){
                setTimeout(()=>{
                    if(numOfFlipped[0].shape===numOfFlipped[1].shape){
                        setIsPositive(true);
                        setIsSnackbarOpen(true);
                        setTimeout(()=>{
                            setIsSnackbarOpen(false);
                        },2000)
                        dispatch(addToScore())
                        const shape = numOfFlipped[0].shape;
                        setCards((prev)=>{
                            if(prev) {
                                const clonedPrev = cloneDeep(prev);
                                clonedPrev.found(shape)
                                clonedPrev.flipAllBack()
                                return clonedPrev
                            }
                            return prev;
                        })
                    }
                    else {
                        setIsPositive(false);
                        setIsSnackbarOpen(true);
                        setTimeout(()=>{
                            setIsSnackbarOpen(false);
                        },2000)
                        dispatch(depositOneTurn())
                        setCards((prev)=>{
                            if(prev) {
                                const clonedPrev = cloneDeep(prev);
                                clonedPrev.flipAllBack()
                                return clonedPrev
                            }
                            return prev;
                        })
                    }
                },1000)
            }
        };
    },[cards, name, dispatch,game])

    return <GamePageViewer
            score={score}
            canClick={!!game?.isGameActivate}
            flipCard={flipCard}
            shuffleCards={shuffleCards}
            cards={cards}
            isSnackbarOpen={isSnackbarOpen}
            isPositive={isPositive}
            startAnotherGame={startAnotherGame}
        />;
};

export default GamePageController;