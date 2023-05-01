import { createSlice } from "@reduxjs/toolkit";
import {BY_FIVE, Game, gameContainerReducerProps} from "./GameContainer.models";
import {cloneDeep} from "loadsh";


const initialState: gameContainerReducerProps = {
    game: null,
    turns: 6,
    score: 0
};

export const gameContainerSlice = createSlice({
    name: "GameContainerView",
    initialState,
    reducers: {
        startNewGame: (state, action) => {
            state.turns = 6;
            state.score = 0;
            state.game = new Game({CardArray: action.payload.shapes,id: action.payload.id, name: action.payload.name});
        },
        gameIsWon:  (state) => {
            const clonedGame = cloneDeep(state.game);
            clonedGame.isWon = true;
            state.game = clonedGame;
        },
        depositOneTurn: (state) => {
            state.turns = state.turns -1;
        },
        activateNewGame:  (state) => {
            const clonedGame = cloneDeep(state.game);
            clonedGame.activateGame();
            state.game = clonedGame
        },
        addToScore : (state) => {
            state.score = state.score + BY_FIVE;
        },
    }
});

export const {
    startNewGame,
    depositOneTurn,
    activateNewGame,
    addToScore,
    gameIsWon
} = gameContainerSlice.actions;
export default gameContainerSlice.reducer;