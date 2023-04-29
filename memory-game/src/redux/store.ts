import gameContainerReducer from "../components/GameContainer/GameContainer.slice";
import configReducer from '../config/config.slice'
import { configureStore } from "@reduxjs/toolkit";

const middlewareConfiguration = { serializableCheck: false };

export const store = configureStore({
    reducer: {
        gameContainer: gameContainerReducer,
        config: configReducer,
    },
    devTools: {
        name: "memory-game"
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(middlewareConfiguration)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;