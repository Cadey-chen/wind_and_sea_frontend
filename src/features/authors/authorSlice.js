import React from 'react';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { authorService } from './authorService';

const initialState = {
    authors: [],
    isError: false,
    isLoading: false,
    message: ''
}

export const createBook = createAsyncThunk('books/create', async (bookData, thunkAPI) => {
    try {
        const id = thunkAPI.getState().auth.user._id;
        return await authorService.createBook(bookData, id);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
})

export const authorSlice = createSlice({
    name: 'author',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
})

export const { reset } = authorSlice.actions;
export default authorSlice.reducer;
