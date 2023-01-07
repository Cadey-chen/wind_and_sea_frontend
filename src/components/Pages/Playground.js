import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Playground.css';
import '../../App.css';
import booksReducer from '../../features/books/bookSlice';
import BookForm from './BookForm';
import Spinner from '../Spinner';
import LoginForm from './LoginForm';
import { getAllBooks, reset, editBook, deleteBook } from '../../features/books/bookSlice';
import Logout from './Logout';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BookCard from './BookCard';

function Playground() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { books, isLoading, isError, message } = useSelector((state) => state.books);
    
      const handleDelete = (id) => {
        dispatch(deleteBook(id));

        dispatch(getAllBooks());
      }

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/LoginForm');
    } else {
      dispatch(getAllBooks());
    }
    
    return () => {
      dispatch(reset());
    }

  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='playground-container'>
      <section className="heading">
        <h1>Welcome {user && user.username}</h1>
      </section>
      <div>
        <ListGroup>
           {books && books.map((book) => (
              <ListGroup.Item>
                  {book && <BookCard book={book}/>}
              </ListGroup.Item>
           ))}
        </ListGroup>
      </div>
      <div className="book-form-container">
        {user && <Logout />}
        {user && <BookForm />}
      </div>
    </div>
  )
}

export default Playground;
