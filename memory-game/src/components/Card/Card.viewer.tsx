import React from 'react';
import {StyledCard, StyledCardFlipped} from "./Card.styled";
import {CardViewerProps} from "./Card.models";
import {FaCrown, FaPizzaSlice, FaPepperHot, FaKiwiBird, FaQuidditch, FaSnowboarding} from 'react-icons/fa';
import {Shape} from "../GameContainer/GameContainer.models";
const CardViewer:React.FC<CardViewerProps> = ({card, canClick}) => {
    const iconByShape = (shape: Shape) => {
        switch (shape) {
            case 'X':
                return  <FaPizzaSlice size={50} color={'var(--color-card-first)'}/>
            case 'O':
                return  <FaPepperHot size={50} color={'var(--color-card-first)'}/>
            case 'Z':
                return  <FaKiwiBird size={50} color={'var(--color-card-first)'}/>
            case 'U':
                return  <FaQuidditch size={50} color={'var(--color-card-first)'}/>
            case 'V':
                return  <FaSnowboarding size={50} color={'var(--color-card-first)'}/>
        }
    }

    return (
        <>
            {card.isOnFlip || card.isFound?
                (
                    <StyledCardFlipped canClick={canClick}>
                        {iconByShape(card.shape)}
                    </StyledCardFlipped>
                ):
                (
                    <StyledCard flip={card.isOnFlip} canClick={canClick}>
                        <FaCrown size={50} color={'var(--color-shadow-first)'}/>
                    </StyledCard>
                )}
        </>


    );
};

export default CardViewer;