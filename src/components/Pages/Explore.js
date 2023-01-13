import React, {useEffect, useState} from 'react';
import '../../App.css';
import './Explore.css';
import BooksList from './BooksList';
import Create from './Create';

function Explore() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch('https://dwrestapi.herokuapp.com/books/get')
    .then(res => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setBooks(data);
    })
  }, []);
  return (
    <>
    <div className='explore-container'>
      <div className="explore-heading-wrapper">
        <h1>Explore</h1>
        <p>Explore the Daoism writings in our database,
          contributed by the vibrant online community!
        </p>
      </div>
    </div>
    <div className="list-background">
      <div className="line-space">
      </div>
      {books && <BooksList props={books}/>}
      <div className="line-space">
      </div>
    </div>
    </>
  )
}

export default Explore;