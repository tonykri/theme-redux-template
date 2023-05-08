'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Features/counterSlice';
import nameReducer from './Features/nameSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        name: nameReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;