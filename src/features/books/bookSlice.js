import React from 'react';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import bookService from './bookService';

const initialState = {
    books: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createBook = createAsyncThunk('books/create', async (bookData, thunkAPI) => {
    try {
        return await bookService.createBook(bookData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
})

// get all books by current user 
export const getAllBooks = createAsyncThunk(
    'books/getAll',
    async (_, thunkAPI) => {
        try {
            const id = thunkAPI.getState().auth.user._id;
            return await bookService.getAllBooks(id);
        } catch (error) {
            const message = (error.response && 
                error.response.data && error.response.data.message) ||
                error.message || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
)

// edit one specific book based on ID 
export const editBook = createAsyncThunk(
    'books/edit',
    async (newBook, thunkAPI) => {
        try {
            return await bookService.editBook(newBook);
        } catch (error) {
            const message = (error.response && 
                error.response.data && error.response.data.message) ||
                error.message || error.toString();

            return thunkAPI.rejectWithValue(message); 
        }
    }
)

// delete one book that was uploaded by user 
export const deleteBook = createAsyncThunk(
    'books/delete', 
    async (id, thunkAPI) => {
        try {
            return await bookService.deleteBook(id);
        } catch (error) {
            const message = (error.response && 
                error.response.data && error.response.data.message) ||
                error.message || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const bookSlice = createSlice({
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
            window.location.reload();
        })
        .addCase(createBook.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload; 
        })
        .addCase(getAllBooks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.books = action.payload.book;
        })
        .addCase(getAllBooks.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(editBook.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            window.location.reload();
        })
        .addCase(editBook.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(deleteBook.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.books = state.books.filter(
                ((books) => books._id !== action.payload.id)
            )
            window.location.reload();
        })
        .addCase(deleteBook.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    },
})

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
