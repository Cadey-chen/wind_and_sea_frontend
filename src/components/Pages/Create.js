import React, { useState } from 'react';
import './Create.css';
import '../../App.css';

function Create() {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const entry = {name};

        console.log(entry);

        fetch('http://localhost:8080/authors/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(entry)
        }).then(() => console.log('New author added'))
    }

  return (
    <div className="create">
        <h2>Add a New Author</h2>
        <form onSubmit={handleSubmit}>
            <label>Author Name:</label>
            <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            <button>Add Author</button>
        </form>
    </div>
  )
}

export default Create;