import { createSlice } from "@reduxjs/toolkit";

interface ConfigProps {
    language: 'en'|'es',
    mode:'light'|'dark'
}

const initialState: ConfigProps = {
    language: 'en',
    mode:'light'
};

export const configSlice = createSlice({
    name: "configView",
    initialState,
    reducers: {
        changeLanguage: (state) => {
            state.language = state.language==='en'?'es':'en';
        },
        changeMode: (state) => {
            state.mode = state.mode==='light'?'dark':'light';
        },
    }
});

export const {
    changeLanguage,changeMode

} = configSlice.actions;
export default configSlice.reducer;