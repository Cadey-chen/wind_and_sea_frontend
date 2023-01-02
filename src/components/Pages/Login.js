import React, {useState, useEffect} from 'react';
import {FaSignInAlt} from 'react-icons/fa';

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })

    const {name, password} = formData;

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
    <section className="heading">
        <h1>
            <FaSignInAlt /> Log In
        </h1>
        <p>Log in to your account</p>
    </section>
    
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <input type="text" className="form-control" id="name" name='name' value={name} placeholder='Enter Username' onChange={handleChange}/>
            </div>
            <div className='form-group'>
            <input type="password" className="form-control" id="password" name='password' value={password} placeholder='Enter Password' onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button type="submit" className='btn btn-block'>
                    Submit
                </button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Login;