import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks";
import {RootState} from "../../redux";
import {Turn} from "./Turns.models";
import TurnsViewer from "./Turns.viewer";

const TurnsController:React.FC = () => {
    const { turns } = useTypedSelector((state: RootState) => state.gameContainer);
    const [turnsArray, setTurnsArray] = useState<Turn[]>([]);


    useEffect(()=>{
        setTurnsArray(Array.from(Array(6).keys()).map((index:number)=>{
            return new Turn({isActive:index<turns})
        }))
    },[turns])

    return (
        <TurnsViewer turns={turnsArray}/>
    );
};

export default TurnsController;