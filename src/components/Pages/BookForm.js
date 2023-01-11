import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBook, reset } from '../../features/books/bookSlice';
import './Register.css';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './BookCard.css';

function BookForm() {
    const { user } = useSelector((state) => state.auth);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

        return () => {
            dispatch(reset());
        }
    }

    const handleChange = (e) => {
        setBook((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

  return (
    <div>
    <Button variant="contained" onClick={handleShow} sx={{ml: -5, mt: -3.5}}>Add New Source</Button>
    <Modal open={show} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={{
        mt: 10,
        ml: 80,
        width: 600,
        height: 800,
        backgroundColor: 'white',
        border: 1
      }}>
        <form onSubmit={onSubmit}>
          <div className="title">
            <h2>New Source: {book.title}</h2>
          </div>
        <div>
          <div className="entry">
          <TextField type="text" variant="outlined" name="type" id="type" value={book.type} label="Type" onChange={handleChange}
          sx={{width: 450}}/>
          </div>
          <div className="entry">
          <TextField variant="outlined" type="text" name="title" id="title" value={book.title} label="Title" onChange={handleChange} sx={{width: 450}}/>
          </div>
          <div className="entry">
          <TextField variant="outlined" type="text" name="author" id="author" value={book.author} label="Author" onChange={handleChange} sx={{width: 450}}/>
          </div>
          <div className="entry">
          <TextField multiline variant="outlined" type="text" name="description" id="description" value={book.description} label="Description" onChange={handleChange} sx={{width: 450}}/>
          </div>
          <div className="entry">
          <TextField variant="outlined" type="text" name="yearPublished" id="yearPublished" value={book.yearPublished} label="Year Published" onChange={handleChange} sx={{width: 450}}/>
          </div>
          <div className="entry">
          <TextField variant="outlined" type="text" name="url" id="url" value={book.url} label="URL" onChange={handleChange} sx={{width: 450}}/>
          </div>
        </div>
        <div>
          <Button variant="contained" sx={{ml: 7, mt: 4}} type="submit">Add Source</Button>
          <Button variant="contained" sx={{ml: 3, mt: 4}} onClick={handleClose}>Cancel</Button>
        </div>
        </form>
        </Box>
      </Modal>
    </div>
  )
}

/*
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
*/

export default BookForm;