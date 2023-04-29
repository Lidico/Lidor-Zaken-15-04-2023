import {ReactNode} from "react";

export type Shape = 'X'|'O'|'V'|'U'|'Z';
export interface GameContainerProps {
    children: ReactNode
}

export interface GameProps {
    CardArray: Shape[];
    id: string;
}

export interface CardProps {
    shape: Shape
}

export interface gameContainerReducerProps {
    game: Game | null
}

export class Card {
    shape: Shape;
    isOnFlip: boolean;
    isFound: boolean;

    constructor({
                    shape
                }: CardProps
    ) {
        console.log(shape)
        this.shape = shape;
        this.isOnFlip = false;
        this.isFound = false;

    }
}

export interface CardListProps {
    list: Shape[];
}

export class CardList {
    list: Card[]

    constructor({
        list
                }:CardListProps) {
        this.list = list.map(el => new Card({shape:el}));
    }

    getList() {
        return this.list;
    }

    shuffleList() {
        for (let i = this.list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
        }
    }
}

export class Game {
    id: string;
    time: number;
    isWon: boolean;
    turns: number;
    cards: CardList;
    isGameActivate: boolean;

    constructor({
                    CardArray,
                    id,
                }: GameProps
    ) {
        this.id = id;
        this.time = 60;
        this.isGameActivate = false;
        this.isWon = false;
        this.turns = 6;
        this.cards =  new CardList({list:CardArray});
    }
    getTurns() {
        return this.turns;
    }

    activateGame(){
        this.isGameActivate = true;
    }
}

