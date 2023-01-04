import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import './Register.css';

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
    <div className="logout-wrap">
        <button className='btn' onClick={onLogout}>
            <FaSignOutAlt /> Logout
        </button>
    </div>
  )
}

export default Logout;