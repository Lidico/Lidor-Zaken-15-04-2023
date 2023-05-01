import React from 'react';
import {CardControllerProps} from "./Card.models";
import CardViewer from "./Card.viewer";
import {useTypedSelector} from "../../hooks";
import {RootState} from "../../redux";

const CardController:React.FC<CardControllerProps> = ({card}) => {
    const { game } = useTypedSelector((state: RootState) => state.gameContainer);

    return <CardViewer card={card} canClick={!!game?.isGameActivate}/>
};

export default CardController;