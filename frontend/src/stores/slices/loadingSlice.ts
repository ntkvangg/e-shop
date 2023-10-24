import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        startLoading: () => true,
        finishLoading: () => false,
    }
})


export const {startLoading, finishLoading} = loadingSlice.actions;
export default loadingSlice.reducer;
export const isLoading = (state: any) => state;