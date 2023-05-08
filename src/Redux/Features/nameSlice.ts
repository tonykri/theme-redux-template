'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface NameState {
    value: string
}

const initialState: NameState = {
    value: ''
}

export const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeName } = nameSlice.actions;

export default nameSlice.reducer;
