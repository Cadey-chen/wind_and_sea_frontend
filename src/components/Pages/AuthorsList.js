import React from 'react';
import './AuthorsList.css';
import '../../App.css';

function AuthorsList({props}) {
    console.log(props.authors);
  return (
    <div>
        <h1>A List of all Authors in Database</h1>
        <ul className="profile-list">
            {
                props.authors.map((content) => (
                    <li>
                        <span><strong>ID: {content._id}</strong></span>
                        <span><strong>Name: {content.name}</strong></span>
                    </li>
                ))
            }
        </ul>
    </div>
  );
}

export default AuthorsList;