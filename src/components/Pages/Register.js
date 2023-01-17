import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
import { register, reset } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import './Register.css';
import './LoginForm.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import PersonIcon from '@mui/icons-material/Person';

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

            dispatch(register(userData));
        }
    }

  return (
    <div className="loginform-container">
        <Card sx={{
            width: "35%",
            height: "70%",
            ml: '32.5%',
            mt: '10%',
            borderRadius: '5%',
            background: '#CFF2FF',
            overflow: 'auto'
        }}>
    <Typography sx={{mt: '15%', fontSize: "1.5vw", color: '#0B3D89'}}>
        <h1>
            <PersonIcon color="#0B3D89" fontSize="3.5vw"/> Register
        </h1>
    </Typography>
    <CardContent display="flex" justifyContent="center" sx={{ml: '18%', mt: '10%'}}>
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
                    Register
                </button>
            </div>
        </form>
    </section>
    </CardContent>
    </Card>
    </div>
  )
}

export default Register;