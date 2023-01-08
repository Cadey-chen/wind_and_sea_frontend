import axios from 'axios';

// Create new book 
const createBook = async (bookData) => {
    const response = await axios.post('https://dwrestapi.herokuapp.com/books/create', bookData);
    console.log(response.data);
    return response.data;
}

const getAllBooks = async (id) => {
    const response = await axios.get('https://dwrestapi.herokuapp.com/books/getByUser/' + id);
    console.log(response.data);
    return response.data;
}

const editBook = async (newBook) => {
    const id = newBook._id;
    console.log(id);
    delete newBook._id;
    console.log(newBook);
    const response = await axios.patch('https://dwrestapi.herokuapp.com/books/update/' + id, newBook);
    console.log(response.data);
    return response.data;
}

const deleteBook = async (id) => {
    const response = await axios.delete('https://dwrestapi.herokuapp.com/books/delete/' + id);
    console.log(response.data);
    return response.data;
}

const authorService = {
    createBook,
    getAllBooks,
    editBook,
    deleteBook
} 

export default authorService;
