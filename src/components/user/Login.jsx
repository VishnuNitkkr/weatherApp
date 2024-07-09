import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const navigate=useNavigate()
 

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response=await axios.post('http://localhost:8080/api/v1/user/login',{email,password,confirmPassword},{
        credentials:true,
        headers:{
          "Content-Type":'application/json',
          "Access-Control-Allow-Origin":'http://localhost:8080',
          "Access-Control-Allow-Methods":"GET,POST"
        }
      })

      console.log(response.data.user)
      if (response) {
        localStorage.setItem('userId', email);

        navigate('/');
        toast.success(response.data.message)
      }

    } catch (error) {
      console.error('Login failed:', error);

      toast.error("Try Again!!!")
    }
  };
  return (
    <>  <Typography
    className='alert'>
    To access the features of the weather application, you must first log in.
    </Typography>
       <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        
        className='login-box'
      >
        <Typography component="h1" variant="h5">
          Login Here
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            
            autoComplete="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={(e)=>setconfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
    </>
  )
}

export default Login
