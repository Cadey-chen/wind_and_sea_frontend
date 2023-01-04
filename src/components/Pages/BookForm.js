import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../../features/authors/authorSlice';
import React from 'react';

function BookForm() {
    const [book, setBook] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createBook({book}));
        setBook('');
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="book">Author</label>
                <input type="text" name="book" id="book" value={book} onChange={(e) => setBook(e.target.value)}/>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    Add Book
                </button>
            </div>
        </form>
    </section>
  )
}

export default BookForm;