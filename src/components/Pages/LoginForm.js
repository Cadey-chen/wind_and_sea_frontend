import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function LoginForm() {
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/Register');
    }

    const navigateLogin = () => {
        navigate('/Login');
    }

  return (
    <div className="form-group-2">
        <button onClick={navigateRegister} className="btn btn-block">Register</button>
        <button onClick={navigateLogin} className="btn btn-block">Login</button>
    </div>
  )
}

export default LoginForm;