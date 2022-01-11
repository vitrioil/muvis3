import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface AudioState {
    isPlaying: boolean
    stemEffect: object,
};

// Define the initial state using that type
const initialState: AudioState = {
    isPlaying: false,
    stemEffect: {},
};

export const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        setPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
        addEffect: (state, action: PayloadAction<[string, string]>) => {

        },
        swapEffect: (state, action: PayloadAction<[string, string]>) => {
            console.log(action.payload);
        },
    },
});

export const { setPlaying, swapEffect } = audioSlice.actions;

export default audioSlice.reducer;