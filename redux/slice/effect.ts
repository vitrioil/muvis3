import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EffectSpeed {
    effectName: string,
    effectSpeed: number
}

// Define a type for the slice state
interface EffectState {
    lineSpeed: number,
    maxLines: number,
    currentLines: number,

    sphereSpeed: number,
    sphereCount: number,
};

// Define the initial state using that type
const initialState: EffectState = {
    lineSpeed: 5,
    maxLines: 500,
    currentLines: 200,

    sphereSpeed: 5,
    sphereCount: 100
};

export const effectSlice = createSlice({
    name: 'effect',
    initialState,
    reducers: {
        setLineSpeed: (state, action: PayloadAction<number>) => {
            state.lineSpeed = action.payload;
        },
        setCurrentLine: (state, action: PayloadAction<number>) => {
            state.currentLines = Math.min(state.maxLines, action.payload);
        },
        setSphereSpeed: (state, action: PayloadAction<number>) => {
            state.sphereSpeed = action.payload;
        },
        setEffectSpeed: (state, action: PayloadAction<EffectSpeed>) => {
            if(action.payload.effectName.toLowerCase() === "line") {
                state.lineSpeed = action.payload.effectSpeed;
            } else if(action.payload.effectName.toLowerCase() === "sphere") {
                state.sphereSpeed = action.payload.effectSpeed;
            }
        }
    },
});

export const { setLineSpeed, setSphereSpeed, setEffectSpeed } = effectSlice.actions;

export default effectSlice.reducer;