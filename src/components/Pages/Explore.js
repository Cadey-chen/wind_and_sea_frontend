import React, {useEffect, useState} from 'react';
import '../../App.css';
import './Explore.css';
import AuthorsList from './AuthorsList';
import Create from './Create';

function Explore() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/authors/get')
    .then(res => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setAuthors(data);
    })
  }, []);
  return (
    <div className='explore-container'>
      {authors && <AuthorsList props={authors}/>}
      <Create/>
    </div>
  )
}

export default Explore;