import { createSlice } from "@reduxjs/toolkit";
import { Game, gameContainerReducerProps} from "./GameContainer.models";


const initialState: gameContainerReducerProps = {
    game: null,
};

export const gameContainerSlice = createSlice({
    name: "GameContainerView",
    initialState,
    reducers: {
        startNewGame: (state, action) => {
            console.log(action)
            state.game = new Game({CardArray: action.payload.shapes,id: action.payload.id});
        },
    }
});

export const {
    startNewGame,

} = gameContainerSlice.actions;
export default gameContainerSlice.reducer;