import { Shape } from "@components/GameContainer/GameContainer.models";

export interface CardProps {
    shape: Shape
}
export class Card {
    shape: Shape;
    isOnFlip: boolean;
    isFound: boolean;

    constructor({
                    shape
                }: CardProps
    ) {
        this.shape = shape;
        this.isOnFlip = false;
        this.isFound = false;
    }
    flip() {
        this.isOnFlip = true;
    }
}

export interface CardControllerProps {
    card: Card
}

export interface StyledCardProps {
    canClick: boolean,
    flip?: boolean
}

export interface CardViewerProps extends CardControllerProps, StyledCardProps{
}