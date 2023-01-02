import React, { useState, useEffect } from 'react';
import './Playground.css';
import '../../App.css';
import AuthorsList from './AuthorsList';
import Create from './Create';

function Playground() {
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
    <div className='playground-container'>
      {authors && <AuthorsList props={authors}/>}
      <Create/>
    </div>
  )
}

export default Playground;

/*
async function getAllAuthorsList() {
  const response = await fetch('http://localhost:8080/authors/get', {
      headers: {
          method: 'GET',
          mode: 'cors',
          redirect: 'follow',
          body: JSON.stringify()
      }
  })

  return response;
};

const authorsList = await getAllAuthorsList();
*/

/*
function Playground() {
  let data;
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'http://localhost:8080/authors/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
      data = response.json();
      console.log(data);
    };
    getData();
  })
  return (
    <div className='playground-container'>
      {data}
    </div>
  )
}
*/