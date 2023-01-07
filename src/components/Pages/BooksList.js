import React from 'react';
import './BooksList.css';
import '../../App.css';
import Collapsible from 'react-collapsible';

function BooksList({props}) {
    console.log(props.books);
  return (
    <div>
        <h1>A List of all Resources in Database</h1>
            {
                props.books.map((content) => (
                    <Collapsible trigger={content.title}>
                        <li>
                            <span><strong>Name: {content.type}</strong></span>
                        </li>
                        <li>
                            <span><strong>Type: {content.type}</strong></span>
                        </li>
                        <li>
                            <span><strong>Author: {content.author}</strong></span>
                        </li>
                        <li>
                            <span><strong>Description: {content.description}</strong></span>
                        </li>
                        <li>
                            <a href={content.url}>{content.url}</a>
                        </li>
                    </Collapsible>
                ))
            }
    </div>
  );
}

export default BooksList;