import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface AudioState {
    isPlaying: boolean
};

// Define the initial state using that type
const initialState: AudioState = {
    isPlaying: false
};

export const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        setPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
    },
});

export const { setPlaying } = audioSlice.actions;

export default audioSlice.reducer;