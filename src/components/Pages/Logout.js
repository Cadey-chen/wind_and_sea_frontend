import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import './Register.css';
import Button from '@mui/material/Button';

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

  return (
    <div>
        <Button variant='contained' onClick={onLogout} sx={{m: 7, mt: 4}}>
            <FaSignOutAlt />Logout
        </Button>
    </div>
  )
}

export default Logout;