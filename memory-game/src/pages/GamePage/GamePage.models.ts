import {CardList, Shape} from "../../components/GameContainer/GameContainer.models";

export const shapes: Shape[] = ['X', 'O', 'V', 'U', 'Z'];

export interface GamePageViewerProps {
    cards: CardList | null;
    flipCard: (index:number)=>void;
    canClick: boolean;
    score: number;
    shuffleCards: ()=>void;
    isSnackbarOpen: boolean;
    isPositive: boolean;
    startAnotherGame: ()=>void;
}