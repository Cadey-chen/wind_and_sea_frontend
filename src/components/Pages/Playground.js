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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Playground() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { books, isLoading, isError, message } = useSelector((state) => state.books);
  
  useEffect(() => {
    if (!user) {
      navigate('/LoginForm');
    } else {
      dispatch(getAllBooks());
    } 

    if (isError) {
      console.log(message);
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
      <div className="user-heading">
        <h1>{user && user.username}'s</h1>
        <h1>Space</h1>
      </div>
      <Card sx={{ml: "52%", mt: "8%", width: "43%", height: "65%", boxShadow: 2, borderRadius: '2%', position: "absolute",
                 maxHeight: "70%", overflow: 'auto'}}>
        <CardContent sx={{m: '5%'}}>
          <Typography sx={{fontSize: '1.35vw', fontFamily: 'Inter', fontWeight: 'medium'}}>
            Contribute to the resource database here, by
            adding a new source, or manage the sources 
            you uploaded.
          </Typography>
        </CardContent>
        <CardContent>
        <List sx={{
          border: 1,
          borderColor: '#F7ECFF',
          backgroundColor: '#F7ECFF',
          mt: '-2%',
          ml: '6%',
          width: '87%',
          boxShadow: 2,
          maxHeight: '20vw',
          overflow: 'auto',
          borderRadius: '2%',
        }}
        subheader={
          <ListSubheader>
            <Typography sx={{fontFamily: 'Inter', fontWeight: 800, fontSize: '1.2vw'}}>
            My Sources
            </Typography>
          </ListSubheader>
        }>
           {books && books.map((book) => (
              <ListItem sx={{mt: '1%', mb: 0, ml: 0, mr: 0, width: '100%'}}>
                  {book && <BookCard book={book}/>}
              </ListItem>
           ))}
        </List>
        </CardContent>
        <CardActions>
          {user && <Logout />}
          {user && <BookForm />}
        </CardActions>
        </Card>
    </div>
  )
}

export default Playground;
