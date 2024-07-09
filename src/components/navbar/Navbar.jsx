import React, { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import { toast } from 'react-toastify';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Button from '@mui/material/Button';
import './Navbar.css'
import {useNavigate} from 'react-router-dom';
import { Box, Modal} from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Navbar = () => {
  const userId=localStorage.getItem('userId');

  const [detail,setDetail]=useState(null);
  const [profile,setProfile]=useState(false)

  useEffect(()=>{
    
    const findNameFunction=async()=>{
      const response=await axios.get(`http://localhost:8080/api/v1/user-data/userData?email=${userId}`)
      
      setDetail(response.data.result)
    }

    findNameFunction();

  },[])

  const navigate=useNavigate()


  
  

  const handleProfile=()=>{
    setProfile(!profile)
  }
  const handleLogin=()=>{
    navigate('/login')
  }

  const handleRegister=()=>{
    navigate('/register')
  }
  
  const handleLogout=()=>{
    

    localStorage.clear()
    navigate('login')
    toast.success("Log out Successfully")

  }

  return (
    <AppBar position="sticky" className='navbar'>
      <Toolbar >
        <Typography variant="h5" noWrap>
          WeatherApp
        </Typography>

        
        
        <div style={{ marginLeft: 'auto' }}>
          {userId ? (
            
            <>
            <Button
            color="inherit" onClick={handleProfile}> 
            <PersonIcon sx={{m:1}}/>
            {detail?.name}</Button>

            

          {profile&&<Modal
        open={profile}
        onClose={handleProfile}
        aria-labelledby="user-details-title"
        aria-describedby="user-details-description"
      >
        <Box className="profile-detail">
          <Typography id="user-details-title" variant="" component="h2"
          
          >

           <Box className='arrange'>
           <VerifiedUserIcon sx={{m:1,fontSize:30}}/>
           {detail?.name}
           </Box>
            <hr />
          </Typography>
          <Box className='detail'>
          <Box className='arrange'>
          <EmailIcon sx={{m:1}} />
          <Typography variant="" component="h4" >
          
            EMAIL:
          </Typography>
          </Box>
          <Typography variant="h" component="h5">
            {detail?.email}
          </Typography>
          </Box>

          <Box className='detail'>
          <Box className='arrange'>
          <MyLocationIcon sx={{m:1}}/>
          <Typography variant="" component="h4">
          
            CITY:
          </Typography>
          </Box>
          <Typography variant="" component="h4" >
            {detail?.city}
          </Typography>
          </Box>
        </Box>
      </Modal>}
            
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={handleLogin}>Login</Button>
              <Button color="inherit" onClick={handleRegister}>Register</Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar
