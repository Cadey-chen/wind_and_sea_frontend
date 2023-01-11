import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Playground.css';
import '../../App.css';
import BookForm from './BookForm';
import Spinner from '../Spinner';
import { getAllBooks, reset } from '../../features/books/bookSlice';
import Logout from './Logout';
import BookCard from './BookCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';

function Playground() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { books, isLoading, isError, message } = useSelector((state) => state.books);
    
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
        <h1>{user && user.username}'s</h1>
        <h1>Space</h1>
      </section>
      <div>
        <List sx={{
          border: 1,
          borderColor: 'white',
          backgroundColor: '#F7ECFF',
          mt: 0,
          ml: 136,
          width: 700,
        }}
        subheader={
          <ListSubheader>
            Contributed Sources
          </ListSubheader>
        }>
           {books && books.map((book) => (
              <ListItem sx={{mt: 0, mb: 0, ml: 0, mr: 0, borderColor: 'white', width: 400}}>
                  {book && <BookCard book={book}/>}
              </ListItem>
           ))}
        </List>
      </div>
      <div className="book-form-container">
        {user && <Logout />}
        {user && <BookForm />}
      </div>
    </div>
  )
}

export default Playground;
