import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import './LoginForm.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function LoginForm() {
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/Register');
    }

    const navigateLogin = () => {
        navigate('/Login');
    }

  return (
    <div className="loginform-container"> 
    <Card sx={{
      mt: '15%',
      ml: '28%',
      height: 'auto',
      width: '45vw',
      backgroundColor: '#CFF2FF',
      boxShadow: 2,
      borderRadius: '5%',
      border: 1,
      borderColor: 'white',
    }}>
      <CardContent>
        <Typography sx={{fontSize: '1.2vw', fontFamily: 'Inter', m: '5%', fontWeight: 'medium', color: '#0B3D89'}}>
          Login, or create an account to access your personal Playground. 
          A space to upload Daoism sources to our database. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={navigateRegister} sx={{zIndex: 2000, m: '2vw', ml: '2vw', maxWidth: '8vw', maxHeight: '4vw'}}>Register</Button>
        <Button variant="contained" onClick={navigateLogin} sx={{m:'2vw', maxWidth: '8vw', maxHeight: '4vw'}}>Login</Button>
      </CardActions>
    </Card>  
    </div>
  )
}

export default LoginForm;