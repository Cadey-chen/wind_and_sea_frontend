import React from 'react';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authorService from './authorService';

const initialState = {
    authors: [],
    isError: false,
    isLoading: false,
    message: ''
}

export const createBook = createAsyncThunk('books/create', async (bookData, thunkAPI) => {
    try {
        return await authorService.createBook(bookData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
})

export const authorSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(createBook.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createBook.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.books.push(action.payload);
        })
        .addCase(createBook.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload; 
        })
    }
})

export const { reset } = authorSlice.actions;
export default authorSlice.reducer;
