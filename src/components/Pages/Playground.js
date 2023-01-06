import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Playground.css';
import '../../App.css';
import authorsReducer from '../../features/authors/authorSlice';
import BookForm from './BookForm';
import Spinner from '../Spinner';
import LoginForm from './LoginForm';
import { reset } from '../../features/authors/authorSlice';

function Playground() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { authors, isLoading, isError, message } = useSelector((state) => state.authors);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    return () => {
      dispatch(reset());
    }

    console.log(user);

  }, [user, navigate, isError, message, dispatch])

  /*
  useEffect(() => {
    async function init() {
      const newUser = await localStorage.getItem('user');
      console.log(newUser);
      setUser(JSON.parse(newUser));
    }
    init();
    console.log(user);
  }, [])
  */

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='playground-container'>
      <section className="heading">
        <h1>Welcome {user && user.username}</h1>
      </section>
      <div className="book-form-container">
        {user && <BookForm />}
      </div>
    </div>
  )
}

export default Playground;
