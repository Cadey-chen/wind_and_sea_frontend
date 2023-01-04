// Create new book 
const createBook = async (bookData) => {
    fetch('http://localhost:8080/books/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(bookData)
        }).then(() => console.log('New book added'))
}

const authorService = {
    createBook
} 

export default authorService;
