import React, {useState, useEffect} from 'react';
import {FaUser} from 'react-icons/fa';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cPassword: ''
    })

    const {name, email, password, cPassword} = formData;

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
            <FaUser /> Register
        </h1>
        <p>Please Register for your account</p>
    </section>
    
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <input type="text" className="form-control" id="name" name='name' value={name} placeholder='Enter Username' onChange={handleChange}/>
            </div>
            <div className='form-group'>
            <input type="text" className="form-control" id="email" name='email' value={email} placeholder='Enter Email Address' onChange={handleChange}/>
            </div>
            <div className='form-group'>
            <input type="password" className="form-control" id="password" name='password' value={password} placeholder='Enter Password' onChange={handleChange}/>
            </div>
            <div className='form-group'>
            <input type="password" className="form-control" id="cPassword" name='cPassword' value={cPassword} placeholder='Confirm Password' onChange={handleChange}/>
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

export default Register;