import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBook } from '../../features/authors/authorSlice';
import './Register.css';

function BookForm() {
    const { user } = useSelector((state) => state.auth);

    const [book, setBook] = useState({
        type: '',
        title: '',
        author: '',
        description: '',
        yearPublished: '',
        url: '',
        userID: user._id
    });

    const { type, title, author, description, yearPublished, url, userID } = book;

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        const bookData = {
            type,
            title, 
            author, 
            description, 
            yearPublished, 
            url, 
            userID
        }

        console.log(bookData);

        dispatch(createBook(bookData));
        setBook({
            type: '',
            title: '',
            author: '',
            description: '',
            yearPublished: '',
            url: '',
            userID: user._id
        });
    }

    const handleChange = (e) => {
        setBook((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Type</label>
                <input type="text" name="type" id="type" value={book.type} placeholder="e.g. Book, research papers" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" id="title" value={book.title} placeholder="Title" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Author</label>
                <input type="text" name="author" id="author" value={book.author} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" name="description" id="description" value={book.description} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Year Published</label>
                <input type="text" name="yearPublished" id="yearPublished" value={book.yearPublished} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>URL (optional)</label>
                <input type="text" name="url" id="url" value={book.url} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    Add Source 
                </button>
            </div>
        </form>
    </section>
  )
}

export default BookForm;