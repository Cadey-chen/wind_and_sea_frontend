import React, {useState, useEffect} from 'react';
import {FaSignInAlt} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { login, reset } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import './Register.css';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const {username, password} = formData;

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

        const userData = {
            username,
            password
        }

        dispatch(login(userData));
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
            <input type="text" className="form-control" id="name" name='username' value={username} placeholder='Enter Username' onChange={handleChange}/>
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