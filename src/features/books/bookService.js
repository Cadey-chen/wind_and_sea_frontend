import axios from 'axios';
import APP_URL from '../../config/Config';
const CREATE_URL = APP_URL + 'books/create';
const GET_URL = APP_URL + 'books/getByUser/';
const EDIT_URL = APP_URL + 'books/update/';
const DELETE_URL = APP_URL + 'books/delete/';

// Create new book 
const createBook = async (bookData) => {
    const response = await axios.post(CREATE_URL, bookData);
    // console.log(response.data);
    return response.data;
}

const getAllBooks = async (id) => {
    const response = await axios.get(GET_URL + id);
    // console.log(response.data);
    return response.data;
}

const editBook = async (newBook) => {
    const id = newBook._id;
    // console.log(id);
    delete newBook._id;
    // console.log(newBook);
    const response = await axios.patch(EDIT_URL + id, newBook);
    // console.log(response.data);
    return response.data;
}

const deleteBook = async (id) => {
    const response = await axios.delete(DELETE_URL + id);
    // console.log(response.data);
    return response.data;
}

const authorService = {
    createBook,
    getAllBooks,
    editBook,
    deleteBook
} 

export default authorService;
