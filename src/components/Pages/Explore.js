import React, {useEffect, useState} from 'react';
import '../../App.css';
import './Explore.css';
import BooksList from './BooksList';
import Create from './Create';

function Explore() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/books/get')
    .then(res => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setBooks(data);
    })
  }, []);
  return (
    <div className='explore-container'>
      {books && <BooksList props={books}/>}
    </div>
  )
}

export default Explore;