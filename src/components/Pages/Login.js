import React, {useState, useEffect} from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import './Register.css';
import Spinner from '../Spinner';
import './LoginForm.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

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

    if (isLoading) {
        return <Spinner />;
    }

  return (
    <div className="loginform-container">
        <Card sx={{
      mt: '10%',
      ml: '32%',
      height: '60%',
      width: '35%',
      backgroundColor: '#CFF2FF',
      boxShadow: 2,
      borderRadius: '5%',
      border: 1,
      borderColor: 'white',
    }}>
        <Typography sx={{m: '5%', mt: '20%', fontSize: '1.5vw'}}>
        <h1>
            <FaSignInAlt /> Log In
        </h1>
    </Typography>
    <CardContent sx={{ml: '20%', mt: '15%'}}>
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
                    Login
                </button>
            </div>
        </form>
    </section>
    </CardContent>
    </Card>
    </div>
  )
}

export default Login;