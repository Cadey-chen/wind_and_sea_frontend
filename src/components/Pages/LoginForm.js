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
      mt: 30,
      ml: 80,
      height: 360,
      width: 600,
      backgroundColor: '#CFF2FF',
      boxShadow: 2,
      borderRadius: '5%',
      border: 1,
      borderColor: 'white',
    }}>
      <CardContent>
        <Typography sx={{fontSize: 24, fontFamily: 'Inter', m: 5, mb: 2, fontWeight: 'medium'}}>
          Login, or create an account to access your personal Playground. 
          A space to upload Daoism sources to our database. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={navigateRegister} sx={{m: 6, ml: 18}} size="large">Register</Button>
        <Button variant="contained" onClick={navigateLogin} sx={{m: 6}} size="large">Login</Button>
      </CardActions>
    </Card>  
    </div>
  )
}

export default LoginForm;