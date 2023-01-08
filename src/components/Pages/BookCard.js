import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editBook, deleteBook } from '../../features/books/bookSlice';
import { useSelector, useDispatch } from 'react-redux';

// Have a list group displaying all book titles 
// uploaded by current user, have a Details 
// button at the list item, after clicking on 
// Details button, a modal pops up with all 
// fields of the book populated as values, 
// user can edit or delete the entry, when
// user click on delete will be prompted with 
// an are you sure message 

function BookCard({book}) {
    console.log({book});
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
        console.log(newBook);
        handleClose();
        dispatch(editBook(newBook));
      }
    
      const handleDelete = () => {
        dispatch(deleteBook(_id));
      }

  return (
    <div>
        {book.title}
    <Button onClick={handleShow}>Edit</Button>
    <Modal show={showConfirm} onHide={handleCloseConfirm}>
      <Modal.Body>
        <h1>Are you sure you want to delete {book.title}?</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDelete}>Yes</Button>
        <Button onClick={handleCloseConfirm}>Cancel</Button>
      </Modal.Footer>
    </Modal>
    <Button onClick={handleShowConfirm}>Delete</Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {book.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" name="type" id="type" value={updatedBook.type} label="Type" onChange={handleChange}/>
          <input type="text" name="title" id="title" value={updatedBook.title} label="Title" onChange={handleChange}/>
          <input type="text" name="author" id="author" value={updatedBook.author} label="Author" onChange={handleChange}/>
          <input type="text" name="description" id="description" value={updatedBook.description} label="Description" onChange={handleChange}/>
          <input type="text" name="yearPublished" id="yearPublished" value={updatedBook.yearPublished} label="Year Published" onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleUpdate}>Update</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default BookCard;