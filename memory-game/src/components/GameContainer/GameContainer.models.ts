import {ReactNode} from "react";
import {Card} from "../Card/Card.models";

export const BY_FIVE = 5;
export type Shape = 'X'|'O'|'V'|'U'|'Z';
export interface GameContainerProps {
    children: ReactNode
}


export interface GameProps {
    CardArray: Shape[];
    id: string;
    name: string;
}

export interface gameContainerReducerProps {
    game: Game | null,
    turns: number;
    score: number
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
    flipAllBack () {
        this.list.forEach(card=>{
            card.isOnFlip = false;
        })
    }
    found (shape:Shape) {
        this.list.forEach(card=>{
            if(card.shape===shape){
                card.isFound = true;
            }
        })
    }
}

export class Game {
    id: string;
    time: number;
    isWon: boolean;
    cards: CardList;
    isGameActivate: boolean;
    name: string

    constructor({
                    CardArray,
                    id,
                    name
                }: GameProps
    ) {
        this.id = id;
        this.name = name;
        this.time = 60;
        this.isGameActivate = false;
        this.isWon = false;
        this.cards =  new CardList({list:CardArray});
    }

    getTime() {
        return this.time;
    }
    activateGame(){
        this.isGameActivate = true;
    }
    gameOver(){
        this.isGameActivate = false;
    }

}

