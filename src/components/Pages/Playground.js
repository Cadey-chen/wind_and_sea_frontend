import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Playground.css';
import '../../App.css';
import authorsReducer from '../../features/authors/authorSlice';
import BookForm from './BookForm';

function Playground() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className='playground-container'>
      <section className="heading">
        <h1>Welcome {user && user.username}</h1>
      </section>
      <div className="book-form-container">
        <BookForm /> 
      </div>
    </div>
  )
}

export default Playground;
