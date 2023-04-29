import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks";
import {RootState} from "../../redux";
import {Turn} from "./Turns.models";
import TurnsViewer from "./Turns.viewer";

const TurnsController:React.FC = () => {
    const { game } = useTypedSelector((state: RootState) => state.gameContainer);
    const [turnsArray, setTurnsArray] = useState<Turn[]>([]);


    useEffect(()=>{
        let turns = 0;
        if(game){
            turns = game.getTurns();
        }
        setTurnsArray(Array.from(Array(6).keys()).map((index:number)=>{
            return new Turn({isActive:index<turns})
        }))
    },[game])

    return (
        <TurnsViewer turns={turnsArray}/>
    );
};

export default TurnsController;