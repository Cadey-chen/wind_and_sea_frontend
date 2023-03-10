import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { editBook, deleteBook } from '../../features/books/bookSlice';
import { useDispatch } from 'react-redux';
import './BookCard.css';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../../App.css';

// Have a list group displaying all book titles 
// uploaded by current user, have a Details 
// button at the list item, after clicking on 
// Details button, a modal pops up with all 
// fields of the book populated as values, 
// user can edit or delete the entry, when
// user click on delete will be prompted with 
// an are you sure message 

function BookCard({book}) {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [updatedBook, setUpdatedBook] = useState({
      _id: book._id,
      userID: book.userID,
      type: book.type,
      title: book.title,
      author: book.author,
      description: book.description,
      yearPublished: book.yearPublished,
      url: book.url,
    });
  
    const {_id, userID, type, title, author, description, yearPublished, url} = updatedBook;
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseConfirm = () => setShowConfirm(false);
    const handleShowConfirm = () => setShowConfirm(true);
  
    const handleChange = (e) => {
      setUpdatedBook((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }

    const handleUpdate = () => {
        const newBook = {_id, userID, type, title, author, description, yearPublished, url};
        handleClose();
        dispatch(editBook(newBook));
      }
    
      const handleDelete = () => {
        dispatch(deleteBook(_id));
      }

  return (
    <div>
      <Box>
      <div>
      <Typography sx={{fontFamily: 'Inter', fontSize: '1.2vw', fontWeight: 'bold'}}>
        {book.title}
      </Typography>
      </div>
        <ButtonGroup variant="contained" justifyContent="flex-end" sx={{mt: '2%'}}>
          <Button size="large" variant="contained" onClick={handleShow} sx={{mr: '10%', maxHeight: '5vw', maxWidth: '15vw'}}>Edit</Button>
          <Button size="large" variant="contained" onClick={handleShowConfirm} sx={{ml: '1%', maxHeight: '5vw', maxWidth: '15vw'}}>Delete</Button>
        </ButtonGroup>
      </Box>
    <Modal hidebackdrop open={showConfirm} onClose={handleCloseConfirm}
    aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box position="absolute" top="37%" left="33%" sx={{
        width: '35%',
        height: '25%',
        maxHeight: '30vw',
        backgroundColor: 'white',
        outlineColor: 'black',
        border: 1,
        overflow: 'auto'
      }}>
        <Typography id="modal-modal-title" height="2vw"
        sx={{
          m: '7%',
          fontSize: '1.2vw',
        }}>Are you sure you want to delete {book.title}?</Typography>
        <Button variant="contained" onClick={handleDelete}
        sx={{ml: '8%', mt: '3%', maxHeight: '5vw', maxWidth: '15vw'}} size="large">Yes</Button>
        <Button variant="contained" onClick={handleCloseConfirm} sx={{ml: '4%', mt: '3%', maxHeight: '5vw', maxWidth: '15vw'}} size="large">Cancel</Button>
      </Box>
    </Modal>
    <Modal open={show} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={{
        mt: '4%',
        ml: '30%',
        width: '40%',
        height: '80%',
        maxHeight: '45vw',
        overflow: 'auto',
        backgroundColor: 'white',
        border: 1
      }}>
          <div className="title">
            <Typography sx={{fontSize: '2vw', fontFamily: 'Inter', fontWeight: 'bold'}}>{book.title}</Typography>
          </div>
        <div>
          <div className="entry">
          <TextField type="text" variant="outlined" name="type" id="type" value={updatedBook.type} label="Type" onChange={handleChange}
          sx={{width: '87%'}}/>
          </div>
          <div className="entry">
          <TextField variant="outlined" type="text" name="title" id="title" value={updatedBook.title} label="Title" onChange={handleChange} 
          sx={{width: '87%'}}/>
          </div>
          <div className="entry">
          <TextField variant="outlined" type="text" name="author" id="author" value={updatedBook.author} label="Author" onChange={handleChange} 
          sx={{width: '87%'}}/>
          </div>
          <div className="entry">
          <TextField multiline variant="outlined" type="text" name="description" id="description" value={updatedBook.description} label="Description" onChange={handleChange} 
          sx={{width: '87%'}}/>
          </div>
          <div className="entry">
          <TextField variant="outlined" type="text" name="yearPublished" id="yearPublished" value={updatedBook.yearPublished} label="Year Published" onChange={handleChange} 
          sx={{width: '87%'}}/>
          </div>
          <div className="entry">
          <TextField variant="outlined" type="text" name="url" id="url" value={updatedBook.url} label="URL" onChange={handleChange} 
          sx={{width: '87%'}}/>
          </div>
        </div>
        <div>
          <Button variant="contained" sx={{ml: '7%', mt: '5%', maxHeight: '5vw', maxWidth: '15vw'}} onClick={handleUpdate} size="medium">Update</Button>
          <Button variant="contained" sx={{ml: '3%', mt: '5%', maxHeight: '5vw', maxWidth: '15vw'}} onClick={handleClose} size="medium">Cancel</Button>
        </div>
        </Box>
      </Modal>
    </div>
  )
}

export default BookCard;