import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './filmsSlice';

const store = configureStore({
    reducer: {
        film: filmsReducer 
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;