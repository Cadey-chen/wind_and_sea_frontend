import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import authorReducer from '../features/authors/authorSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        authors: authorReducer,
    },
})