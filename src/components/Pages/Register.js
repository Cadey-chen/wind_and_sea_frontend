import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
import { register, reset } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import './Register.css';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        cPassword: ''
    })

    const {username, email, password, cPassword} = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate('/Playground');
        }

        dispatch (reset());
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== cPassword) {
            toast.error('Passwords do not match.');
        } else {
            const userData = {
                username,
                email,
                password,
            }

            console.log(userData);

            dispatch(register(userData));
        }
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
            <input type="text" className="form-control" id="name" name='username' value={username} placeholder='Enter Username' onChange={handleChange}/>
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